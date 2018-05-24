import React from 'react';
import { spring } from 'react-motion';

export default class FadeInAnimation {
  isVisible({ opacity }) {
    return opacity > 0.1;
  }

  getWrapper(children, { opacity, translateY }) {
    return (
      <div style={{
        opacity: opacity,
        transform: 'translateY('+translateY+'px)',
        width: '100%'
      }}>
        {children}
      </div>
    );
  }

  getInitialStyles(styles) {
    return styles.map(() => ({
      opacity: 0,
      translateY: 40,
    }));
  }

  calculateNextFrame = ({ startAnimate, springOptions, prevFrameStyles, percentChange }) => {
    if (!startAnimate) {
      return this.getInitialStyles(prevFrameStyles);
    }

    return prevFrameStyles.map((_, index) => {
      if (index === 0) {
        return {
          opacity: spring(1, springOptions),
          translateY: spring(0, springOptions),
        };
      }
      else if(prevFrameStyles[index - 1].opacity < 0.1)
      {
        return prevFrameStyles[index];
      }
      else {
        // const percentChange = 2;
        const translateChange = parseFloat(40 * percentChange);
        const opacityChange = parseFloat(1 * percentChange);
        const prevStyles = prevFrameStyles[index - 1];
        const prevOpac = (prevStyles.opacity >= opacityChange)? 
          1 : prevStyles.opacity + opacityChange;
        const prevTransY = (prevStyles.translateY <= translateChange)? 
          0 : prevStyles.translateY - translateChange;

        return {
          opacity: spring(prevOpac, springOptions),
          translateY: spring(prevTransY, springOptions),
        };
      }
    });
  }

}