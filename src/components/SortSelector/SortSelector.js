import React from 'react';
import SortSelectorStyles from './SortSelector.styled';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

const SortSelector = ({ sortByPriceDescending, setSortByPriceDescending }) => {
    const handleChange = (e) => {
        setSortByPriceDescending(e.target.value);
    }

    return (
        <SortSelectorStyles>
            <InputLabel color="secondary" style={{fontSize:"12px", fontWeight:"bold"}} id="sort-selector-label">SORT BY&nbsp;</InputLabel>
            <Select labelId="sort-selector-label" value={sortByPriceDescending} onChange={handleChange}>
                <MenuItem value={false}>Price: Low to High</MenuItem>
                <MenuItem value={true}>Price: High to Low</MenuItem>
            </Select>
        </SortSelectorStyles>
    )
}

export default SortSelector;