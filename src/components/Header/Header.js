import React from 'react'
import HeaderStyles from './Header.styled';
import logo from '../../images/claytonhomes_logo_small.png';

const Header = () => {
    return (
        <HeaderStyles>
            <img src={logo} alt="" />
        </HeaderStyles>
    )
}

export default Header
