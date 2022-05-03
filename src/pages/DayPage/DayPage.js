import React, {useState} from 'react';

const DayPage = () => {
    const membersArr = JSON.parse(localStorage.getItem('members')) || []

    const [ttt, setTTT] = useState(null)


    const showNightMoves = (e) => {
        const deadMan = membersArr.filter(player => player.status === 'killed') || []
        const medicMan = membersArr.filter(player => player.status === 'medic') || []
        e.preventDefault()
        if (medicMan.length > 0){
            setTTT(medicMan)
        }
        if (deadMan.length > 0) {
            setTTT(deadMan)
        }
    }


    return (
        <div>
            {ttt && ttt.map(member =>
                <div key={member.name}>{member.status}  <strong>{member.name}</strong></div>)}
            <button onClick={showNightMoves}>SHOW NIGHT MOVES</button>
        </div>
    );
};

export default DayPage;