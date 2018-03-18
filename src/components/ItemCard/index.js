import React from 'react';
import { Column } from 'hedron';
import
  Card, {
  CardContent,
  CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';

//import { Link } from 'react-router-dom';

const StyledCard = styled(Card)`
  display: flex;
  margin: 10px;
`;
const StyledCardContent = styled(CardContent)`
  flex: 1 0 auto;
`;
const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledControls = styled.div`
  margin-left: 20px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
`;
const StyledCardMedia = styled(CardMedia)`
  height: inherit;
  min-width: 100px;
`;
const StyledButton = styled(Button)`
  margin-left: 6px;
`;

class ItemCard extends React.Component {
  render() {
    const { item } = this.props;
    let price =
      parseFloat(
        item
        .sellingStatus[0]
        .convertedCurrentPrice[0]
        .__value__)
      .toFixed(2);

    return (
      <Column xs={12} sm={12} md={6} lg={4} fluid={true}>
        <StyledCard>
          <StyledCardMedia
            image={item.galleryURL[0]}
            title={item.title[0]}
          />
          <StyledDetails>
            <StyledCardContent>
              <Typography component="h4">
                {item.title[0]}
              </Typography>
            </StyledCardContent>
            <StyledControls>
              <Typography component="h3">
                $ {price}
              </Typography>
              <StyledButton
                dense
                color="primary"
                href={item.viewItemURL[0]}
                target="_blank">
                View on Ebay
              </StyledButton>
            </StyledControls>
          </StyledDetails>
        </StyledCard>
      </Column>
    );
  }
}

export default ItemCard;
