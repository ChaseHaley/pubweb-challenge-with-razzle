import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomeStyles from './Home.styled';
import Header from '../components/Header/Header';
import ListingsHeader from '../components/ListingsHeader/ListingsHeader';
import ListingContainer from '../components/ListingContainer/ListingContainer'
import ListButton from '../components/ListButton/ListButton';
import Footer from '../components/Footer/Footer';
import listings from '../data/listings';

const Home = () => {
    const [numItemsToDisplay, setNumItemsToDisplay] = useState(9);
    const [sortByPriceDescending, setSortByPriceDescending] = useState(true);

    return (
        <HelmetProvider>
            <Header />
            <HomeStyles>
                <Helmet>
                    <title>Clayton Homes | Home Listings</title>
                    <meta name="description" content="Clayton Homes Home Page" />
                </Helmet>
                <ListingsHeader numListings={listings.length} sortByPriceDescending={sortByPriceDescending} setSortByPriceDescending={setSortByPriceDescending} />
                <ListingContainer numItemsToDisplay={numItemsToDisplay} sortByPriceDescending={sortByPriceDescending} />
                <ListButton numItemsToDisplay={numItemsToDisplay} setNumItemsToDisplay={setNumItemsToDisplay} />
                <Footer />
            </HomeStyles>
        </HelmetProvider>
    )
}

export default Home
