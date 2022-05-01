import React from 'react';
import css from "../../pages/RolePage/RolePage.module.css";

const MemberWithRole = ({member}) => {

    const choosenCitizen = (e) => {
e.preventDefault()
    }

    return (
        <div>
            {member.name}
            <br/>
            Choose Your Role:
            <form>
                <button onClick={choosenCitizen} className={css.citizenBut}>CITIZEN</button>
                <button className={css.mafiaBut}>MAFIA</button>
                <button className={css.doctorBut}>DOCTOR</button>
                <button className={css.policeBut}>POLICE</button>
            </form>
            <hr/>
        </div>
    );
};

export default MemberWithRole;