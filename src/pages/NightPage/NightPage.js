import React from 'react';

import css from './NightPage.module.css'

const NightPage = () => {

    const members = JSON.parse(localStorage.getItem('members')) || []


    return (
        <div>
            <ul>

                {members && members.map(member=><li key={member.name}>{member.name} <button>KILL</button></li>)}
            </ul>
        </div>
    );
};

export default NightPage;