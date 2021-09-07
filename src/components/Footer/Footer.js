import React, { useContext, useEffect, useState } from 'react'
import { ConsultaApiCoords } from '../../helpers/ConsultaApi';
import { InfoContext } from '../../helpers/InfoContext';
import { FooterStyled, LabelStyled } from './FooterStyled';

const Footer = () => {

    const { info, setInfo } = useContext(InfoContext);
    const [delay] = useState(10000);

    const handleOnChange = (e) => {
        setInfo({
            ...info,
            loop: e.target.checked
        });
    }

    const Interval = (delay) => {
        useEffect(() => {
            if (delay !== null) {
                let id = setInterval(() => {

                    ConsultaApiCoords(info.lat, info.long).then(clima => {
                        setInfo({ ...info, clima, show: true });
                    });

                }, delay);
                return () => {
                    clearInterval(id);
                }
            }
        }, [delay]);

    }

    Interval(info.loop ? delay : null);


    return (
        <FooterStyled>
            {
                info.show &&

                <LabelStyled>
                    <input
                        type="checkbox"
                        // checked={isActive}
                        checked={info.loop}
                        onChange={handleOnChange}
                    />
                    En vivo (http request cada 10s)
                </LabelStyled>
            }

        </FooterStyled>
    )
}

export default Footer;
