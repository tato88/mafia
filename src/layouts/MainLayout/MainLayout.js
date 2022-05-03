import React, {useState} from 'react';

import css from './MainLayout.module.css'
import {Outlet, NavLink} from "react-router-dom"

const MainLayout = () => {

    return (
        <div>
            <div className={css.header}>
                <NavLink to="home">Home</NavLink>
                <NavLink to="members">Members</NavLink>
                <NavLink to="role">Role</NavLink>
                <NavLink to="night">Night</NavLink>
                <NavLink to="day">Day</NavLink>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;