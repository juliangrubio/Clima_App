import React, { useState } from 'react'
import App from './App';
import { InfoContext } from './helpers/InfoContext';

const Clima = () => {

    const [info, setInfo] = useState({});

    return (
        <>
            <InfoContext.Provider value={{ info, setInfo }} >
                <App />
            </InfoContext.Provider>
        </>
    )
}

export default Clima;
