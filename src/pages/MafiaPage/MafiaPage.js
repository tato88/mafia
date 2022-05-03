import React, {useState} from 'react';

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
                    window.history.back()
                }
            }
        })
    }

    return (
        <div>
            <ul>

                {members && members.map(member =>
                    <li key={member.name}>{member.name}
                        <button value={member.name} onClick={kill}>KILL</button>
                    </li>)}
            </ul>


        </div>
    );
};

export default MafiaPage;