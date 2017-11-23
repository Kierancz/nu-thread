import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  margin: 0.5em;
  text-decoration: none;
  font-weight: bold;
`;
const Span = styled.span`
  margin: 0.5em;
`;

const FLink = ({
  active,
  children,
  onClick
}) => {
  // when our filter link is active make it unclickable
  if(active) {
    return <Span>{children}</Span>
  }

  return (
    <Link href='#'
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </Link>
  );
};

export default FLink;