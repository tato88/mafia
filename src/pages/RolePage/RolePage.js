import React from 'react';

import css from './RolePage.module.css'

const RolePage = () => {
    return (
        <div>
            NAME
            Choose Your Role:
            <form>
                <button className={css.citizenBut}>CITIZEN</button>
                <button className={css.mafiaBut}>MAFIA</button>
                <button className={css.doctorBut}>DOCTOR</button>
                <button className={css.policeBut}>POLICE</button>
            </form>
        </div>
    );
};

export default RolePage;