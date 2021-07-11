import React from 'react'
import Button, { ListButtonContainer } from './ListButton.styled';
import listings from '../../data/listings';

const ListButton = ({ numItemsToDisplay, setNumItemsToDisplay }) => {
    const handleClick = () => {
        setNumItemsToDisplay(numItemsToDisplay + 3);
    }

    return (
        <ListButtonContainer>
            <Button style={{ display: numItemsToDisplay >= listings.length ? 'none' : 'inherit' }} onClick={handleClick}>Load More</Button>
        </ListButtonContainer>
    )
}

export default ListButton
