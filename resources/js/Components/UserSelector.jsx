import React from 'react';

const UserSelector = ({ users }) => {
    const handleUserChange = (e) => {
        const userId = e.target.value;
        if (userId) {
        window.location.href = `/mypage/${userId}`;
        }
    };

    return (
        <div>
        <h2>他メンバーを見る</h2>
        <select onChange={handleUserChange}>
            <option value="">ユーザーを選択</option>
            {users.map((otherUser) => (
            <option key={otherUser.id} value={otherUser.id}>
                {otherUser.name}
            </option>
            ))}
        </select>
        </div>
    );
};

export default UserSelector;
