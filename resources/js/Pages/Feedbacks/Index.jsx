import React from 'react';

function Feedbacks(props) {
    return (
        <div>
            <h1>Feedback List</h1>
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
