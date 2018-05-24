import React from 'react'
import PropTypes from 'prop-types';
import { StaggeredMotion, presets } from 'react-motion';
import styled from 'styled-components';
import bottomFadeIn from './bottomFadeInAnimation';

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  box-sizing: content-box;
`;

const animation = new bottomFadeIn();

export default class MotionGrid extends React.Component {
  static propTypes = {
    // Array of react elements you want to render in a grid.
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    /**
     * This controls number of columns to render for each row.
     * This **MUST** be between 1 and 12
     * e.g. `12 / 3` -> This will render 3 columns in each row.
     * e.g. `[ 6, 6, 4, 4, 4 ]` -> This will render 5 items in two rows, first 
     * row will render two items (6, 6), second row will render three items
     * (4, 4, 4).
     */
    columns: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number),
    ]),
    // If you want to control when the animation should start, set to false
    startAnimate: PropTypes.bool,
    // This will disable the animation.
    disableAnimation: PropTypes.bool,
    /**
     * React motion configurations.
     * [More about this here](https://github.com/chenglou/react-motion#--spring-val-number-config-springhelperconfig--opaqueconfig)
     */
    springOptions: PropTypes.shape({
      stiffness: PropTypes.number,
      damping: PropTypes.number,
      precision: PropTypes.number
    }),
    // Whether or not to enable placeholders.
    enablePlaceholders: PropTypes.bool,
    // Number of placeholder rows to show before data is loaded
    placeholderRows: PropTypes.number,
    // React element to render for the placeholder
    placeholderItem: PropTypes.element,
    // Minimum millis to wait before hiding placeholder even if the data was loaded.
    // This is used to pervent flickers when the data is loaded in a very short time
    minimumPlaceholdersTime: PropTypes.number,
  };

  static defaultProps = {
    columns: 12,
    startAnimate: true,
    enablePlaceholders: false,
    springOptions: presets.noWobble,
    placeholderRows: 3,
    minimumPlaceholdersTime: 0,
  };

  constructor(props) {
    super(props);

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    window.removeEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {
    const hasMinimumPlaceholdersTime = this.props.enablePlaceholders && this.props.minimumPlaceholdersTime > 0;

    this.setState({
      isLoadBtnClicked: false,
      // Add first patch
      patches: this.props.children.length > 0 ? [this.props.children] : [],
      // Force show placeholder if minimum placeholder time was greater than zero
      forceShowPlaceholders: hasMinimumPlaceholdersTime,
    });

    // Add timer to unset forceShowPlaceholders state variable after the minimum placeholder time
    if(hasMinimumPlaceholdersTime) {
      this.timer = setTimeout(() => {
        this.setState({
          forceShowPlaceholders: false,
        });
      }, this.props.minimumPlaceholdersTime);
    }

    this.updateDimensions();
  }

  componentDidMount() {
    // Add resize window listener for responsive columns
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

    this.setState({ width: width });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.children.length > this.props.children.length) {
      this.setState({
        patches: [
          ...this.state.patches,
          nextProps.children.slice(this.props.children.length),
        ],
      })
    } else if(nextProps.children.length < this.props.children.length) {
      this.setState({
        patches: [
          // @todo can we do anything about this ??
          nextProps.children,
        ],
      });
    }
  }

  getRows(patch, columns) {
    let rows = [], rowLength = 0;
    const length = columns.length || patch.length;

    for (let i = 0; i < length; i++) {
      const columnWidth = columns[i] || columns;
      if (rowLength <= 0) {
        rowLength = 12;
        rows.push([]);
      }

      rows[rows.length - 1].push({
        element: patch[i],
        width: columnWidth,
      });
      rowLength = rowLength - columnWidth;
    }

    return rows;
  }

  isVisible({ opacity }) {
    return opacity > 0.1;
  }

  renderRows({ rows, animation, styles, isPlaceholders = false }) {
    let k = 0;

    return rows.map((columns, i, rows) => {
      return (
        <div key={i} style={{ overflow: 'hidden' }}>
          <Row>
            {columns.map((column, j) => {
              const columnStyle = styles[k++] || {};

              const width = ((column.width * 100) / 12).toString()+'%';

              if(column.element && (!animation || animation.isVisible(columnStyle))) {
                return (
                  <div
                    style={{width: width}}
                    key={j}
                  >
                    {animation ? animation.getWrapper(column.element, columnStyle) : column.element}
                  </div>
                );
              }
              return null;
            }).filter(ele => !!ele)}
          </Row>
        </div>
      )
    });
  }

  renderPatch({
    isFirst,
    isLast,
    patch,
    columns,
    animation,
    startAnimate,
    springOptions,
    percentChange
  }, index) {
    const rows = this.getRows(patch, columns);
    if (rows.length === 0) {
      return <div></div>;
    }

    if (this.props.disableAnimation) {
      return (
        <div key={index}>
          {this.renderRows({
            rows,
            styles: new Array(patch.length).fill({
              opacity: 1,
              translateX: 0,
            }),
          })}
        </div>
      );
    }

    return (
      <StaggeredMotion
        key={index}
        defaultStyles={animation.getInitialStyles(patch)}
        styles={(prevFrameStyles) => animation.calculateNextFrame({
          startAnimate,
          prevFrameStyles,
          percentChange
        })}>
        {styles => (
          <div>
            {this.renderRows({
              rows,
              styles,
              animation,
            })}
          </div>
        )}
      </StaggeredMotion>
    )
  }

  renderPatches({ patches, ...args }) {
    return patches.map((patch, index) =>
      this.renderPatch({
        isFirst: index === 0,
        isLast: index === patches.length - 1,
        patch,
        ...args,
      }, index));
  }

  getNumberOfShellItems({ columns, placeholderRows }) {
    if(!isNaN(columns)) {
      return Math.floor((12 / columns) * placeholderRows);
    }

    let addition = 0;
    for (var i = 0; i < columns.length; i++) {
      if(addition >= (placeholderRows * 12)) {
        return i ;
      } else {
        addition = columns[i] + addition;
      }
    }
  }

  renderPlaceholders({ columns, placeholderItem, placeholderRows }) {
    const noOfShellItems = this.getNumberOfShellItems({ columns, placeholderRows });
    const patch = new Array(noOfShellItems).fill(placeholderItem);
    const rows = this.getRows(patch, columns);
    return (
      <div>
        {this.renderRows({
          rows,
          styles: new Array(patch.length).fill({
            opacity: 1,
            translateX: 0,
          }),
          isPlaceholders: true,
        })}
      </div>
    );
  }

  getResponsiveColumns({ xs, sm, md, lg }, width) {
    let columns = lg
    if(width >= 992 && width < 1200)
      columns = md;
    else if(width >= 768 && width < 992)
      columns = sm;
    else if(width < 768) {
      columns = xs;
    }
    return columns;
  }

  render() {
    const {
      patches,
      forceShowPlaceholders,
      width
    } = this.state;

    const {
      startAnimate,
      springOptions,
      enablePlaceholders,
      placeholderRows,
      placeholderItem,
      minimumPlaceholdersTime,
      children,
      responsive,
      percentChange,
      ...props,
    } = this.props;
    let { columns } = this.props;
    if(responsive) columns = this.getResponsiveColumns(responsive, width);

    const isDataLoaded = children.length > 0;

    if(enablePlaceholders && (!isDataLoaded || forceShowPlaceholders)) {
      return this.renderPlaceholders({ columns, placeholderItem, placeholderRows });
    }

    return (
      <div {...props}>
        {this.renderPatches({ patches, animation, columns, startAnimate, springOptions, percentChange })}
      </div>
    );
  }
}