import React from 'react';
import css from './HomePage.module.css'

const HomePage = () => {
    return (
        <div>
            {/*clear localStorage button*/}
            <button className={css.newGameBut}>NEW GAME</button>
        </div>
    );
};

export default HomePage;