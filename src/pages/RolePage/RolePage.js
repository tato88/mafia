import React from 'react';

import MemberWithRole from "../../components/MemberWithRole/MemberWithRole";


const RolePage = () => {
    const members = JSON.parse(localStorage.getItem('members')) || []

    return (
        <div>
            {members && members.map(member=><MemberWithRole key={member.name} member={member}/>)}
        </div>
    );
};

export default RolePage;