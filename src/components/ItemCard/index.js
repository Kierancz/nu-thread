import React from 'react';
import { Column } from 'hedron';
//import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {
  StyledCard,
  StyledCardContent,
  StyledDetails,
  StyledControls,
  StyledCardMedia,
  StyledPrice,
  StyledLink
 } from './styles';

class ItemCard extends React.Component {
  render() {
    const { item } = this.props;
    const { sellingStatus, galleryURL, title, viewItemURL, listingInfo } = item;
    const price = sellingStatus?
      parseFloat(
        sellingStatus[0]
        .convertedCurrentPrice[0]
        .__value__)
      .toFixed(2)
      :
      'N/A';
    const image   = galleryURL?    galleryURL[0]  : 'No Image';
    const name    = title?         title[0]       : 'No Title';
    const viewURL = viewItemURL?   viewItemURL[0] : '#';
    // const isBuyNow  = listingInfo[0].buyItNowAvailable[0] === 'true';
    const isObo     = listingInfo[0].bestOfferEnabled[0]  === 'true';
    const isAuction = listingInfo[0].listingType[0]       === 'Auction';

    const itemType = !isAuction? 
      <StyledLink href={viewURL} target="_blank">Buy Now</StyledLink> : 
      <StyledLink href={viewURL} target="_blank">Bid</StyledLink>;
    const obo = isObo? 
      <StyledLink href={viewURL} target="_blank">Make Offer</StyledLink> 
      : '';
    
    return (
      <Column xs={12} sm={12} md={6} lg={4} fluid={true}>
        <StyledCard>
          <StyledCardMedia
            image={image}
            title={name}
          />
          <StyledDetails>
            <StyledCardContent>
              <Typography component="h4">
                {title}
              </Typography>
            </StyledCardContent>
            <StyledControls>
              <StyledPrice>
                $ {price}
              </StyledPrice>
              {obo}
              {itemType}
            </StyledControls>
          </StyledDetails>
        </StyledCard>
      </Column>
    );
  }
}

export default ItemCard;
