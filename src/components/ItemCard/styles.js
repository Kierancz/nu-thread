import {
  Card,
  CardContent,
  CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  display: flex;
  margin: 10px;
`;
export const StyledCardContent = styled(CardContent)`
  flex: 1 0 auto;
`;
export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledControls = styled.div`
  margin-left: 20px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
`;
export const StyledCardMedia = styled(CardMedia)`
  height: inherit;
  min-width: 100px;
`;
export const StyledButton = styled(Button)`
  margin-left: 6px;
`;