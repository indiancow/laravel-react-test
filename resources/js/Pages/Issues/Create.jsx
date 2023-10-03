import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Navbar from '../../Components/Navbar';

function IssuesCreate(props) {
    const [description, setDescription] = useState('');
    const [tagId, setTagId] = useState(''); // 初期値として空文字列を設定
    const [tags, setTags] = useState([]);

    useEffect(() => {
        if(props.tags && props.tags.length > 0) {
            setTags(props.tags); // propsから受け取ったtagsをローカルステートにセット
            setTagId(props.tags[0].id); // 最初のtag.idをセット
        }
    }, [props.tags]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted tagId:', tagId); // フォーム送信時にtagIdの値をログに出力
        Inertia.post('/issues', {
            description: description,
            tag_id: tagId,
        });
    };

    return (
        <div className='back-color'>
            <Navbar />
            <h1 className="text-2xl font-bold mb-6 text-center text-white">クエスト作成</h1>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit} className='issue-form'>
                    <div className='flex justify-center'>
                        <label>
                            クエストジャンル:
                            <select value={tagId} onChange={(e) => setTagId(e.target.value)}>
                                {tags.map(tag => (
                                    <option key={tag.id} value={tag.id}>{tag.name}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className='flex justify-center'>
                        <label>
                            クエスト内容:
                            <textarea 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                            />
                        </label>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" >Submit</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    );
}

export default IssuesCreate;
