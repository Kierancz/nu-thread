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

  calculateNextFrame = ({ startAnimate, springOptions, prevFrameStyles }) => {
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
      else if(prevFrameStyles[index - 1].opacity < 0.4)
      {
        return prevFrameStyles[index];
      }
      else {
        return {
          opacity: spring(prevFrameStyles[index - 1].opacity, springOptions),
          translateY: spring(prevFrameStyles[index - 1].translateY, springOptions),
        };
      }
    });
  }

}