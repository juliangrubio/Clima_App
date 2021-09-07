import React from 'react';
import ParticlesEffect from './helpers/Particles/ParticlesEffect';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {

    return (
        <div className="App">

            <ParticlesEffect />
            <div className="header">
                <Header />
            </div>
            <div className="main">
                    <Main />
            </div>
            <div className="footer">
                <Footer />
            </div>

        </div>
    );

}

export default App;
