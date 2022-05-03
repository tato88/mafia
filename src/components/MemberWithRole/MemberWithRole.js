import React from 'react';
import css from "../../pages/RolePage/RolePage.module.css";


const MemberWithRole = ({member}) => {

    // Set role in LocalStorage
    const choosen = (e) => {
        e.preventDefault()
        setRole(e.target.value)
    }

    const setRole = (eTargetValue) => {
        const resetConfirm = window.confirm("are you sure ?")
        if (resetConfirm) {
            const membersCheck = JSON.parse(localStorage.getItem('members')) || []
            for (const memberCheck of membersCheck) {
                if (memberCheck.name === member.name) {
                    memberCheck.role = eTargetValue
                    localStorage.setItem('members', JSON.stringify(membersCheck))
                }
            }

        }
    }


    return (
        <div>
            {member.name}
            <br/>
            Choose Your Role:
            <form>
                <button onClick={choosen} value={'citizen'} className={css.citizenBut}>CITIZEN</button>
                <button onClick={choosen} value={'mafia'} className={css.mafiaBut}>MAFIA</button>
                <button onClick={choosen} value={'doctor'} className={css.doctorBut}>DOCTOR</button>
                <button onClick={choosen} value={'police'} className={css.policeBut}>POLICE</button>
            </form>
            <hr/>
        </div>
    );
};

export default MemberWithRole;