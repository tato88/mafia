import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "./NightPage.module.css";

const NightPage = () => {
    // const membersArr = JSON.parse(localStorage.getItem('members')) || []
    // const [members, setMembers] = useState([...membersArr])
    //
    // const kill = (e) => {
    //     e.preventDefault()
    // //     const membersWithOutDeadman = members.filter(player => player.name !== e.target.value)
    // //     console.log(membersWithOutDeadman);
    // //     localStorage.setItem('members', JSON.stringify(membersWithOutDeadman))
    // }

    return (
        <div>
            {/*<ul>*/}

            {/*    {members && members.map(member => <li key={member.name}>{member.name}*/}
            {/*        <button value={member.name} onClick={kill}>KILL</button>*/}
            {/*    </li>)}*/}
            {/*</ul>*/}



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