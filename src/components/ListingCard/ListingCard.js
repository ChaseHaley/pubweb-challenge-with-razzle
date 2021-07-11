import React from 'react';
import ListingCardStyles, { ListingImage, ListingInfo, ListingName, ListingPrice, ListingBody } from './ListingCard.styled';

const HomeListingCard = (props) => {
  const {
    imageURL,
    homeName,
    startingPrice,
    beds,
    baths,
    sqft,
    isMultiSection
  } = props;

  console.log(imageURL);
  return (
    <ListingCardStyles>
      <ListingImage>
        <img src={imageURL} alt="" />
      </ListingImage>
      <ListingInfo>
        <ListingName>
          {homeName}
        </ListingName>
        <ListingPrice>
          Starting in the ${startingPrice.toLocaleString()}s
        </ListingPrice>
        <ListingBody>
          {sqft} sq. ft {beds} beds {baths} baths {isMultiSection}
        </ListingBody>
      </ListingInfo>
    </ListingCardStyles>
  )
};

export default HomeListingCard;
