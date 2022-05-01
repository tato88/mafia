import React from 'react';
import css from "../../pages/RolePage/RolePage.module.css";

const MemberWithRole = ({member}) => {

    const choosenCitizen = (e) => {
        e.preventDefault()
        const membersCheck = JSON.parse(localStorage.getItem('members')) || []
        for (const memberCheck of membersCheck) {
            if (memberCheck.name === member.name) {
                memberCheck.role = 'citizen'
                localStorage.setItem('members', JSON.stringify(membersCheck))
            }
        }

    }
    const choosenMafia = (e) => {
        e.preventDefault()
        const membersCheck = JSON.parse(localStorage.getItem('members')) || []
        for (const memberCheck of membersCheck) {
            if (memberCheck.name === member.name) {
                memberCheck.role = 'mafia'
                localStorage.setItem('members', JSON.stringify(membersCheck))
            }
        }
    }
    const choosenDoctor = (e) => {
        e.preventDefault()
        const membersCheck = JSON.parse(localStorage.getItem('members')) || []
        for (const memberCheck of membersCheck) {
            if (memberCheck.name === member.name) {
                memberCheck.role = 'doctor'
                localStorage.setItem('members', JSON.stringify(membersCheck))
            }
        }
    }
    const choosenPolice = (e) => {
        e.preventDefault()
        const membersCheck = JSON.parse(localStorage.getItem('members')) || []
        for (const memberCheck of membersCheck) {
            if (memberCheck.name === member.name) {
                memberCheck.role = 'police'
                localStorage.setItem('members', JSON.stringify(membersCheck))
            }
        }
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