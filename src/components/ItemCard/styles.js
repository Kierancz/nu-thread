import {
  Card,
  CardContent,
  CardMedia } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  display: flex;
  margin: 10px;
`;
export const StyledCardMedia = styled(CardMedia)`
  height: inherit;
  min-width: 100px;
`;
// All text wrapper
export const StyledDetails = styled.div`
  flex-direction: column;
`;
// Title wrapper
export const StyledCardContent = styled(CardContent)`
  flex: 1 0 auto;
`;

export const StyledControls = styled.div`
  justify-content: center;
  margin: 1em 0;
  margin-top: 0;
`;
export const StyledPrice = styled.span`
  display: inline-block;
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  margin-top: 1em;
`;
export const StyledLink = styled.a`
  display: inline-block;
  flex: 1;
  margin-left: 0.5em;
  margin-top: 1em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;