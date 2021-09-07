import React, { useContext } from 'react'
import { InfoContext } from '../../../helpers/InfoContext';
import { CardStyled, ExtraContainer, ImgCard, MiH, Temp } from './CardStyled';


const Card = () => {

    const { info } = useContext(InfoContext);
    const { clima } = info;

    return (
        <CardStyled>

            <ImgCard src={`https://openweathermap.org/img/w/${clima.icon}.png`} alt="Icon" />
            <Temp>{clima.temp}°</Temp>

            <ExtraContainer>
                <MiH>Cielo: {clima.desc}</MiH>
                <MiH>Temp minima: {clima.min}</MiH>
                <MiH>Temp maxima: {clima.max}</MiH>
                <MiH>Humedad: {clima.humedad}%</MiH>
            </ExtraContainer>

        </CardStyled>
    )

}

export default Card;
