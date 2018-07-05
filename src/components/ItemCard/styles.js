import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
  width: 100%;
`;
// Title wrapper
export const StyledCardContent = styled(CardContent)`
  flex: 1 0 auto;
  text-transform: capitalize;
`;

export const StyledControls = styled.div`
  justify-content: center;
  margin: 1em 0;
  margin-top: 0;

  > span {
    font-size: 18px;
    margin-top: 1em;
  }
`;
export const StyledPrice = styled.span`
  display: inline-block;
  flex: 1;
  font-weight: 400;
`;
export const StyledLink = styled.a`
  display: inline-block;
  flex: 1;
  text-decoration: none;
`;
export const StyledActionContainer = styled.span`
  margin-left: 0.5em;
`;