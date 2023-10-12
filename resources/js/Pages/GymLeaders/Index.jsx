import Navbar from '@/Components/Navbar';
import React from 'react';

const Index = ({ gymLeaders }) => {
    console.log(gymLeaders)
    // console.log(userSkillLevels)
    return (
        <div>
            <Navbar />
            <h1>ジムリーダー</h1>
            <ul>
                {Object.values(gymLeaders).map((gymLeader) => (
                        <li key={gymLeader.id}>
                            <a href={route('gymleaders.show', gymLeader.id)}>
                                {gymLeader.name}
                            </a>
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;
