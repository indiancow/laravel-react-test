import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Navbar from '../../components/Navbar'; 

function CreateFeedback({ issue }) {
    const [content, setContent] = useState('');
    console.log(issue)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("handleSubmit is called"); // これがコンソールに表示されるか確認
        Inertia.post('/feedbacks', { issue_id: issue.id, content: content });
    };
    
    return (
        <div>
            <p>依頼者: {issue.user.name}</p> {/* ユーザー名を表示 */}
            <h1>課題タグ: {issue.tag.name}</h1>
            <p>課題: {issue.description}</p> {/* 課題内容を表示 */}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="content">Feedback:</label>
                    <textarea 
                        id="content" 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <Navbar /> {/* Navbarコンポーネントを配置 */}
                {/* 他のコンポーネントやコンテンツ */}
            </div>
        </div>
    );
}

export default CreateFeedback;
