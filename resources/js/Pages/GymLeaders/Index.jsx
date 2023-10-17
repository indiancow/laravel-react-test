import Navbar from '@/Components/Navbar';
import React from 'react';

const Index = ({ gymLeaders }) => {
    console.log(gymLeaders);

    // ジムリーダーをskill_idごとにグループ化
    const groupedGymLeaders = Object.values(gymLeaders).reduce((acc, gymLeader) => {  // ← ここを修正
        if (!acc[gymLeader.skill_id]) {
            acc[gymLeader.skill_id] = [];
        }
        acc[gymLeader.skill_id].push(gymLeader);
        return acc;
    }, {});

    return (
        <div>
            <Navbar />
            <div className='gymleader-content'>
                <h1>ジムリーダー</h1>
                <div className="gym-leader-container">
                    {Object.values(groupedGymLeaders).map((leadersOfSameSkill) => (
                        <div key={leadersOfSameSkill[0].skill_id} className="gym-leader-skill-area">
                            <h2>ジャンル: {leadersOfSameSkill[0].skill.name}</h2>
                            <div className="gym-leader-cards">
                                {leadersOfSameSkill.map((gymLeader) => (
                                    <div key={gymLeader.id} className="gym-leader-card">
                                        <img src="/storage/app/public/GymleaderIcon.png" alt="Gym Leader Icon" />
                                        <a href={route('gymleaders.show', gymLeader.id)}>
                                            <p>{gymLeader.name}</p>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Index;
