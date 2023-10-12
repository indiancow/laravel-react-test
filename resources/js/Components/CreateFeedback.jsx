import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const CreateFeedback = ({ issue }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/feedbacks', { issue_id: issue.id, content: content });
    };
    // console.log(issue)
    
    return (
        <div>
            <p>依頼者: {issue.author}</p>
            <h1>課題タグ: {issue.tag}</h1>
            <p>課題: {issue.description}</p>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="content">内容:</label>
                    <textarea 
                        id="content" 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateFeedback;
