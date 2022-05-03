import React, {useState} from 'react';

const DayPage = () => {
    const membersArr = JSON.parse(localStorage.getItem('members')) || []

    const [ttt, setTTT] = useState(null)


    const showNightMoves = (e) => {
        const deadMan = membersArr.filter(player => player.status === 'killed') || []
        const medicMan = membersArr.filter(player => player.status === 'medic') || []
        e.preventDefault()
        if (medicMan.length > 0) {
            setTTT(medicMan)
        }
        if (deadMan.length > 0) {
            setTTT(deadMan)
        }
    }
    const nextDay = (e) => {
        e.preventDefault()
        if (ttt[0].status === 'killed') {
            const membersArr = JSON.parse(localStorage.getItem('members'))
            const membersArrWithOutDeadMan = membersArr.filter(player => player.status !== 'killed')
            console.log(membersArrWithOutDeadMan);
            for (const lookMedic of membersArrWithOutDeadMan) {
                console.log(lookMedic)
                if (lookMedic.status === 'medic') {
                    delete lookMedic.status
                }
            }
            localStorage.setItem('members', JSON.stringify(membersArrWithOutDeadMan))
        }
        setTTT(null)

    }

    return (
        <div>
            {ttt && ttt.map(member =>
                <div key={member.name}>{member.status} <strong>{member.name}</strong></div>)}
            <button onClick={showNightMoves}>SHOW NIGHT MOVES</button>
            <hr/>
            <hr/>
            <hr/>
            <button onClick={nextDay}>NEXT DAY</button>
        </div>
    );
};

export default DayPage;