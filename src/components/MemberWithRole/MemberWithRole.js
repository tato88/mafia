import React from 'react';
import css from "../../pages/RolePage/RolePage.module.css";

const MemberWithRole = ({member}) => {

    const choosenCitizen = (e) => {
        e.preventDefault()
        member.role = 'citizen'
        console.log(member)
    }
    const choosenMafia = (e) => {
        e.preventDefault()
        member.role = 'mafia'
        console.log(member)
    }
    const choosenDoctor = (e) => {
        e.preventDefault()
        member.role = 'doctor'
        console.log(member)
    }
    const choosenPolice = (e) => {
        e.preventDefault()
        member.role = 'police'
        console.log(member)
    }

    return (
        <div>
            {member.name}
            <br/>
            Choose Your Role:
            <form>
                <button onClick={choosenCitizen} className={css.citizenBut}>CITIZEN</button>
                <button onClick={choosenMafia} className={css.mafiaBut}>MAFIA</button>
                <button onClick={choosenDoctor} className={css.doctorBut}>DOCTOR</button>
                <button onClick={choosenPolice} className={css.policeBut}>POLICE</button>
            </form>
            <hr/>
        </div>
    );
};

export default MemberWithRole;