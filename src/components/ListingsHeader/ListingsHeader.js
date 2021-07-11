import React from 'react';
import ListingsHeaderStyles from './ListingsHeader.styled';
import SortSelector from '../SortSelector/SortSelector';

const ListingsHeader = ({ numListings, sortByPriceDescending, setSortByPriceDescending }) => {
    
    return (
        <ListingsHeaderStyles>
            <p>{numListings} homes available</p>
            <SortSelector sortByPriceDescending={sortByPriceDescending} setSortByPriceDescending={setSortByPriceDescending}/>
        </ListingsHeaderStyles>
    )
}

export default ListingsHeader
