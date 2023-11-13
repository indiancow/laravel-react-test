// CreateFeedback.jsx

import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const CreateFeedback = ({ issue, onClose }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {  
        console.log('handleSubmit is triggered');  
        e.preventDefault();
        try {
            await Inertia.post('/feedbacks', { issue_id: issue.id, content: content });
            if(onClose) {
                onClose();  // フォーム送信後にモーダルを閉じる
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    };
    
    return (
        <div className='feedback-container'>
            <form onSubmit={handleSubmit} className='feedback-form'>
                <div className='feedback-header'>
                    <label htmlFor="content" className='feedback-label'>解決策の提案</label>
                    <div className='feedback-info'>
                        <p className='feedback-author'>依頼者: {issue.author}</p>
                        <h1 className='feedback-tag'>{issue.tag}</h1>
                        <p className='feedback-description'>{issue.description}</p>
                    </div>
                </div>
                <textarea 
                    id="content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                />
                <button type="submit" className='feedback-button'>送信</button>
                <button onClick={onClose} className='feedback-button close-button'>閉じる</button>
            </form>
        </div>

    );
};

export default CreateFeedback;
