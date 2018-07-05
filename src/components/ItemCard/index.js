import React from 'react';
//import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import StyledUnderline from '../Styled/underline';
import {
  StyledCard,
  StyledCardContent,
  StyledDetails,
  StyledControls,
  StyledCardMedia,
  StyledPrice,
  StyledLink,
  StyledActionContainer,
 } from './styles';

class ItemCard extends React.Component {
  render() {
    const { 
      sellingStatus, 
      galleryURL, 
      title, 
      viewItemURL, 
      listingInfo
    } = this.props.item;

    const price = sellingStatus?
      parseFloat(
        sellingStatus[0]
        .convertedCurrentPrice[0]
        .__value__)
      .toFixed(2)
      :
      'N/A';
    const image   = galleryURL?    galleryURL[0]  : '';
    const name    = title?         title[0]       : 'No Title';
    const viewURL = viewItemURL?   viewItemURL[0] : '#';
    // const isBuyNow  = listingInfo[0].buyItNowAvailable[0] === 'true';
    const isObo     = listingInfo[0].bestOfferEnabled[0]  === 'true';
    const isAuction = listingInfo[0].listingType[0]       === 'Auction';

    let actionText  = isAuction?  'Bid'         : 'Buy Now';
    const obo       = isObo?      'Make Offer'  : '';
    if(!isAuction && isObo) actionText = obo;

    const action = 
      <StyledUnderline>
        <StyledLink href={viewURL} target="_blank">
          { actionText }
        </StyledLink> 
      </StyledUnderline>;

    return (
      <StyledCard>
        <StyledCardMedia
          image={image}
          title={name}
        />
        <StyledDetails>
          <StyledCardContent>
            <Typography component="h2" variant="subheading">
              { name }
            </Typography>
          </StyledCardContent>
          <StyledControls>
            <StyledPrice>
              $ { price }
            </StyledPrice>
            <StyledActionContainer>
              { action }
            </StyledActionContainer>
          </StyledControls>
        </StyledDetails>
      </StyledCard>
    );
  }
}

export default ItemCard;
