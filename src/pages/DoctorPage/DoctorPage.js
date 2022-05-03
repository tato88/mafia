import React, {useState} from 'react';

import css from './DoctorPage.module.css'


const DoctorPage = () => {
    const membersArr = JSON.parse(localStorage.getItem('members')) || []
    const [members, setMembers] = useState([...membersArr])

    const heal = (e) => {
        e.preventDefault()
        membersArr.map(player => {
            if (player.name === e.target.value) {
                const resetConfirm = window.confirm(`You want to HEAL !!!  ${player.name}  !!! Are you sure ?`)
                if (resetConfirm) {
                    player.status = 'medic'
                    localStorage.setItem('members', JSON.stringify(membersArr))
                    window.history.back()
                }
            }
        })
    }

    return (
        <div>
            <div className={css.healVSlogo}>
                <div>
                    <ul>

                        {members && members.map(member =>
                            <li key={member.name}>{member.name}
                                <button value={member.name} onClick={heal}>HEAL</button>
                            </li>)}
                    </ul>
                </div>
                <div>
                    <img className={css.medicLogo}
                         src="https://image.winudf.com/v2/image1/Y29tLm1lZGljYWxsb2dvbWFrZXIubWlrYWlsZ3VhcmRpYW5fc2NyZWVuXzhfMTYwNjMwODAxMF8wMjU/screen-10.jpg?fakeurl=1&type=.webp"
                         alt="medic-logo"/>
                </div>
            </div>
        </div>
    );
};

export default DoctorPage;