import React, {useState} from 'react';
import css from './MafiaPage.module.css'

const MafiaPage = () => {
    const membersArr = JSON.parse(localStorage.getItem('members')) || []
    const [members, setMembers] = useState([...membersArr])

    const kill = (e) => {
        e.preventDefault()
        membersArr.map(player => {
            if (player.name === e.target.value) {
                const resetConfirm = window.confirm(`You want to KILL !!!  ${player.name}  !!! Are you sure ?`)
                if (resetConfirm) {
                    player.status = 'killed'
                    localStorage.setItem('members', JSON.stringify(membersArr))
                    // window.location.replace('/night')
                    window.history.back()
                }
            }
        })
    }
    return (
        <div>
            <div className={css.mafiaVSlogo}>
                <div>
                    <ul>

                        {members && members.map(member =>
                            <li key={member.name}>{member.name}
                                <button value={member.name} onClick={kill}>KILL</button>
                            </li>)}
                    </ul>
                </div>
                <div>
                    <img className={css.mafiaLogo}
                         src="https://us.123rf.com/450wm/skovoroda/skovoroda1104/skovoroda110400015/9324149-mafia-che-mira-a-target-con-iscrizione-illustrazione-su-sfondo-nero.jpg?ver=6"
                         alt="medic-logo"/>
                </div>
            </div>
        </div>
    );
};

export default MafiaPage;
