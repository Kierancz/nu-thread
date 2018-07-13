import React from 'react';

const Section = ({
  url,
  height,
  onClick,
  children
}) => {
  const style = {
    backgroundImage: `url(${url})`,
    height: `height: ${height}`
  }
  return (
    <Section
      style={ style }
      onClick={ onClick }
    >
      { children }
    </Section>
  );
};

export default Section;
