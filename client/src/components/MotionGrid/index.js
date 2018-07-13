import React from 'react';
import PropTypes from 'prop-types';
import { presets } from 'react-motion';
import bottomFadeIn from './bottomFadeInAnimation';
import {
  renderPatches, 
  renderPlaceholders, 
  getResponsiveColumns
} from './render';

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
    if(responsive) columns = getResponsiveColumns(responsive, width);

    const isDataLoaded = children.length > 0;

    if(enablePlaceholders && (!isDataLoaded || forceShowPlaceholders)) {
      return renderPlaceholders({ columns, placeholderItem, placeholderRows });
    }

    return (
      <div {...props}>
        {renderPatches({ patches, animation, columns, startAnimate, springOptions, percentChange })}
      </div>
    );
  }
}