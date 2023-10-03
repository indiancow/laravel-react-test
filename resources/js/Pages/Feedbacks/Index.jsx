import React from 'react';
import Navbar from '../../components/Navbar'; 

function Feedbacks(props) {
    return (
        <div>
            <div>
                <Navbar /> {/* Navbarコンポーネントを配置 */}
                {/* 他のコンポーネントやコンテンツ */}
            </div>
            <h1>フィードバック一覧</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>フィードバック作成者</th>
                        <th>課題</th>
                        <th>フィードバック</th>
                    </tr>
                </thead>
                <tbody>
                    {props.feedbacks.map(feedback => (
                        <tr key={feedback.id}>
                            <td>{feedback.id}</td>
                            <td>{feedback.user.name}</td>
                            <td>{feedback.issue.description}</td>
                            <td>{feedback.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Feedbacks;
