import React from 'react'
import { ButtonComponentStyled } from './ButtonComponentStyled';


const ButtonComponent = ({ label, onClick, type }) => {
    return (
        <ButtonComponentStyled
            onClick={onClick}
            type={type}
        >
            {label}
        </ButtonComponentStyled>
    )
}

export default ButtonComponent;