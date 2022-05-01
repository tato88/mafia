import React, {useState} from 'react';


const MembersPage = () => {
    const membersArr = JSON.parse(localStorage.getItem('members')) || []
    const [members, setMembers] = useState([...membersArr])


    //function add member to localstorage
    const addMebmer = (e) => {
        e.preventDefault()
        if (e.target.name.value) {
            membersArr.push({'name': e.target.name.value})
            localStorage.setItem('members', JSON.stringify(membersArr))
            e.target.reset()
            setMembers(membersArr)
        }
    }


    //function to clear localstorage
    const resetBut = () => {
        const resetConfirm = window.confirm("are you sure ?")
        if (resetConfirm) {
            const membersArr = []
            localStorage.setItem('members', JSON.stringify(membersArr))
            setMembers(membersArr)

        }

    }

    return (
        <div>
            <form id={'form'} onSubmit={addMebmer}>
                <input name={'name'} type={"text"}/>
                <button>ADD</button>
            </form>
            <hr/>
            <hr/>
            <hr/>
            <ul>
                {members && members.map(member => <li key={member.name}>{member.name}</li>)}
            </ul>
            <hr/>
            <hr/>
            <hr/>
            <button onClick={resetBut}>RESET</button>
        </div>
    );
};

export default MembersPage;