import React, { useContext, useState } from 'react'
import ConsultaApiPlaces from '../../../helpers/ConsultaApi.js';
import { InfoContext } from '../../../helpers/InfoContext.js';

import { Input, Ulsuggests, Lisuggests } from './Autocomplete.jsx';

const Autocomplete = () => {

    const { info, setInfo } = useContext(InfoContext);
    const [sugerenciasFiltradas, setSugerenciasFiltradas] = useState([]);
    const [indexSugerenciaActiva, setIndexSugerenciaActiva] = useState(0);
    const [mostrarSugerencias, setMostrarSugerencias] = useState(false);
    const [input, setInput] = useState("");


    const onChange = (e) => {
        const userInput = e.target.value;

        if (userInput !== '') {
            ConsultaApiPlaces(userInput).then(resp => {
                setSugerenciasFiltradas(resp);
                return;
            });
        }

        setInfo({
            show: false,
            loop: false,
            lat: '',
            long: ''
        });

        setInput(e.target.value);
        setIndexSugerenciaActiva(0);
        setMostrarSugerencias(true);

    };

    const onClick = (e) => {
        setSugerenciasFiltradas([]);
        setInput(e.target.innerText);

        setInfo({
            ...info,
            lat: sugerenciasFiltradas[indexSugerenciaActiva].lat,
            long: sugerenciasFiltradas[indexSugerenciaActiva].long
        });

        setIndexSugerenciaActiva(0);
        setMostrarSugerencias(false);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13 && e.target.value !== '') {

            if (sugerenciasFiltradas[indexSugerenciaActiva] === undefined) {
                setIndexSugerenciaActiva(0);
                setMostrarSugerencias(false);
                e.target.value = '';
                return;
            }

            setInput(sugerenciasFiltradas[indexSugerenciaActiva].nombre);
            setInfo({
                ...info,
                lat: sugerenciasFiltradas[indexSugerenciaActiva].lat,
                long: sugerenciasFiltradas[indexSugerenciaActiva].long
            });

            setMostrarSugerencias(false);

        } else if (e.keyCode === 38) {
            if (indexSugerenciaActiva === 0) {
                return;
            }

            setIndexSugerenciaActiva(indexSugerenciaActiva - 1);

        } else if (e.keyCode === 40) {
            if (indexSugerenciaActiva - 1 === sugerenciasFiltradas.length) {
                return;
            }

            setIndexSugerenciaActiva(indexSugerenciaActiva + 1);

        } else if (e.keyCode === 27) {
            e.target.value = '';
            setIndexSugerenciaActiva(0);
            setMostrarSugerencias(false);
        }

    };

    const ListaSugerencias = ({ className }) => {

        return (sugerenciasFiltradas.length !== 0) && (

            <Ulsuggests>
                {sugerenciasFiltradas.map(({ nombre: sugerencia }, index) => {
                    let className;
                    if (index === indexSugerenciaActiva) {
                        className = "sugerencia-activa";
                    }

                    return (
                        <Lisuggests className={className} key={sugerencia} onClick={onClick}>
                            {sugerencia}
                        </Lisuggests>
                    );
                })}
            </Ulsuggests>
        );
    };


    return (
        <>
            <Input
                className="inputStyled"
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={input}
                autoFocus
            />

            {mostrarSugerencias && input && <ListaSugerencias />}
        </>
    );

}

export default Autocomplete;
