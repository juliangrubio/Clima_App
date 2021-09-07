import React from 'react'
import { HeaderDiv, HeaderTitle } from './HeaderStyled';
import titulo from '../../assets/titulo.svg'

const Header = () => {
    return (
        <HeaderDiv>
            {/* <img src={titulo} alt="titulo" /> */}
            <HeaderTitle src={titulo} />
        </HeaderDiv>
    )
}

export default Header;
