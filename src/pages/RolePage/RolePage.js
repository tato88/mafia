import React from 'react';

import css from './RolePage.module.css'
import MemberWithRole from "../../components/MemberWithRole/MemberWithRole";

const RolePage = ({membersArrayForRole}) => {
    const members = membersArrayForRole
    return (
        <div>
            {members && members.map(member=><MemberWithRole key={member.name} member={member}/>)}
        </div>
    );
};

export default RolePage;