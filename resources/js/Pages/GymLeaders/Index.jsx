import Navbar from '@/Components/Navbar';
import React from 'react';

const Index = ({ gymLeaders }) => {
    console.log(gymLeaders)
    return (
        <div>
            <Navbar />
            <h1>Gym Leaders</h1>
            <ul>
                {gymLeaders.map((gymLeader) => (
                    <li key={gymLeader.id}>
                        <a href={route('gymleaders.show', gymLeader.id)}>
                            {gymLeader.name}
                        </a>
                        {/* <li>{leader.id}</li> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;
