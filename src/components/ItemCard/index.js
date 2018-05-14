import React from 'react';
import { Column } from 'hedron';
import {
  Card,
  CardContent,
  CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    const price = item.sellingStatus?
      parseFloat(
        item
        .sellingStatus[0]
        .convertedCurrentPrice[0]
        .__value__)
      .toFixed(2)
      :
      'N/A';
    const image = item.galleryURL? item.galleryURL[0] : 'No Img';
    const title = item.title? item.title[0] : 'No Title';
    const viewURL = item.viewItemURL? item.viewItemURL[0] : '#';

    return (
      <Column xs={12} sm={12} md={6} lg={4} fluid={true}>
        <StyledCard>
          <StyledCardMedia
            image={image}
            title={title}
          />
          <StyledDetails>
            <StyledCardContent>
              <Typography component="h4">
                {title}
              </Typography>
            </StyledCardContent>
            <StyledControls>
              <Typography component="h3">
                $ {price}
              </Typography>
              <StyledButton
                color="primary"
                href={viewURL}
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
