import React from 'react';
import css from './HomePage.module.css'

const backToAllMembers = () => {
    const resetConfirm = window.confirm("are you sure ?")
    if (resetConfirm) {
        const basket = JSON.parse(localStorage.getItem('basket')) || []
        localStorage.setItem('members', JSON.stringify(basket))
    }
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