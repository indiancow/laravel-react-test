import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

function IssuesCreate() {
    const [description, setDescription] = useState('');
    const [tagId, setTagId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Inertiaを用いて、Laravelバックエンドへデータを送信
        Inertia.post('/issues', {
            description: description,
            tag_id: tagId,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Description:
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </label>
                <label>
                    Tag ID:
                    <input 
                        type="number" 
                        value={tagId} 
                        onChange={(e) => setTagId(e.target.value)} 
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default IssuesCreate;
