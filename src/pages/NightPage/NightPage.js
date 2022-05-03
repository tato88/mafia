import {NavLink, Outlet} from "react-router-dom";

import css from "./NightPage.module.css";

const NightPage = () => {


    return (
        <div>
            <div className={css.nightHeader}>
                <NavLink to="mafia">Mafia</NavLink>
                <NavLink to="doctor">Doctor</NavLink>
                <NavLink to="police">Police</NavLink>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default NightPage;