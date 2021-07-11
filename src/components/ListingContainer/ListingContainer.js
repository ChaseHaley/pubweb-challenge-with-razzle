import React, { useState, useEffect } from 'react'
import ListingCard from '../ListingCard/ListingCard';
import ListingContainerStyles from './ListingContainer.styled';
import listings from '../../data/listings';

const ListingContainer = ({ numItemsToDisplay, sortByPriceDescending }) => {
    let listItems = listings.map((item) => <ListingCard
        key={item.homeName}
        imageURL={item.imageURL}
        homeName={item.homeName}
        startingPrice={item.startingPrice}
        beds={item.beds}
        baths={item.baths}
        sqft={item.sqft}
        isMultiSection={item.isMultiSection}
    />).sort((a, b) => sortByPriceDescending ? (a.props.startingPrice < b.props.startingPrice ? 1 : -1) : (a.props.startingPrice > b.props.startingPrice ? 1 : -1));

    let itemsToShow = listItems.filter((item, index) => index < numItemsToDisplay);

    return (
        <ListingContainerStyles>
            {itemsToShow}
        </ListingContainerStyles>
    )
}

export default ListingContainer
