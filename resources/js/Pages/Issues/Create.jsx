import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Navbar from '../../Components/Navbar'; // Navbarコンポーネントのインポート

function IssuesCreate(props) {
    const [description, setDescription] = useState('');
    const [tagId, setTagId] = useState('');
    const [tags, setTags] = useState([]); // タグのデータを管理するためのステート
    
    useEffect(() => {
        if(props.tags) setTags(props.tags); // propsから受け取ったtagsをローカルステートにセット
    }, [props.tags]);

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
            <Navbar /> {/* Navbarコンポーネントを配置 */}
            <form onSubmit={handleSubmit}>
            <label>
                    クエストジャンル:
                    <select value={tagId} onChange={(e) => setTagId(e.target.value)}>
                        {tags.map(tag => (
                            <option key={tag.id} value={tag.id}>{tag.name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    クエスト内容:
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default IssuesCreate;
