import React from 'react';
import { StaggeredMotion } from 'react-motion';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  box-sizing: content-box;
`;

export const getRows = (patch, columns) => {
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
};

export const isVisible = ({ opacity }) => {
  return opacity > 0.1;
};

export const renderRows = 
  ({ rows, animation, styles, isPlaceholders = false }) => 
{
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

export const renderPatch = ({
  isFirst,
  isLast,
  patch,
  columns,
  animation,
  startAnimate,
  springOptions,
  percentChange,
  ...props
}, index) => {
  const rows = getRows(patch, columns);
  if (rows.length === 0) {
    return <div></div>;
  }

  if (props.disableAnimation) {
    return (
      <div key={index}>
        {renderRows({
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
          {renderRows({
            rows,
            styles,
            animation,
          })}
        </div>
      )}
    </StaggeredMotion>
  )
}

export const renderPatches = ({ patches, ...args }) => {
  return patches.map((patch, index) =>
    renderPatch({
      isFirst: index === 0,
      isLast: index === patches.length - 1,
      patch,
      ...args,
    }, index));
};

export const getNumberOfShellItems = 
  ({ columns, placeholderRows }) => {
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
};

export const renderPlaceholders = 
  ({ columns, placeholderItem, placeholderRows }) => 
{
  const noOfShellItems = getNumberOfShellItems({ columns, placeholderRows });
  const patch = new Array(noOfShellItems).fill(placeholderItem);
  const rows = getRows(patch, columns);
  return (
    <div>
      {renderRows({
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

export const getResponsiveColumns = ({ xs, sm, md, lg }, width) => {
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