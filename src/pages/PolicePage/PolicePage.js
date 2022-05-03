import React, {useState} from 'react';

import css from './PolicePage.module.css'

const PolicePage = () => {

    const membersArr = JSON.parse(localStorage.getItem('members')) || []
    const [members, setMembers] = useState([...membersArr])

    const chek = (e) => {
        e.preventDefault()
        membersArr.map(player => {
            if (player.name === e.target.value) {
                const resetConfirm = window.confirm(`You want to CHEK !!!  ${player.name}  !!! Are you sure ?`)
                if (resetConfirm) {
                    // window.alert(`${player.name} - ${player.status}`)
                    if(player.role === 'citizen'){
                         window.alert(`${player.name} - то свята людина! МИРНИЙ !!!`)
                    }
                    if(player.role === 'doctor'){
                         window.alert(`${player.name} - то свята людина! МИРНИЙ !!!`)
                    }
                    if(player.role === 'police'){
                         window.alert(`${player.name} - то свята людина! МИРНИЙ !!!`)
                    }
                    if(player.role === 'mafia'){
                        window.alert(`${player.name} - то страшна людина! МАФІЯ !!!`)
                    }
                    window.history.back()
                }
            }
        })
    }

    return (
        <div>
            <div className={css.policeVSlogo}>
                <div>
                    <ul>

                        {members && members.map(member =>
                            <li key={member.name}>{member.name}
                                <button value={member.name} onClick={chek}>CHEK</button>
                            </li>)}
                    </ul>
                </div>
                <div>
                    <img className={css.policeLogo}
                         src="https://i.pinimg.com/originals/cc/83/39/cc8339f1fea7462b20f18ae9aee6c4b8.jpg"
                         alt="police-logo"/>
                </div>
            </div>
        </div>
    );
};

export default PolicePage;