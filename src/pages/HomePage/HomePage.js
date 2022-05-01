import React from 'react';
import css from './HomePage.module.css'

const backToAllMembers = () => {
    console.log('BACK TO ALL MEMBERS LIST')
}

const HomePage = () => {
    return (
        <div>
            {/*back to all members button*/}
            <button className={css.newGameBut} onClick={backToAllMembers}>NEW GAME</button>
        </div>
    );
};

export default HomePage;