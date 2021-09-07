import React, { useContext } from 'react'
import { ConsultaApiCoords } from '../../helpers/ConsultaApi';
import { InfoContext } from '../../helpers/InfoContext';
import ButtonComponent from '../Common/Button/ButtonComponent';
import Card from '../Common/Card/Card';
import Autocomplete from '../Common/InputAutocomplete/Autocomplete';
import { CardContainer, MainContainer, MainForm, MainStyled } from './MainStyled'


const Main = () => {

    const { info, setInfo } = useContext(InfoContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ((info.lat === undefined || info.lat === '') || (info.long === undefined || info.long === '')) {
            return;
        }

        ConsultaApiCoords(info.lat, info.long).then(clima => {
            setInfo({ ...info, clima, show: true });
        });
    };


    return (
        <MainStyled>

            <MainForm onSubmit={handleSubmit}>
                <MainContainer>

                    <Autocomplete />
                    <ButtonComponent label="Buscar" type="primary" />

                </MainContainer>
            </MainForm>

            <CardContainer>
                {
                    info.show && <Card />
                }
            </CardContainer>

        </MainStyled>
    )
}

export default Main;
