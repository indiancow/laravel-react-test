import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Navbar from '../../Components/Navbar';

function IssuesCreate(props) {
    const [description, setDescription] = useState('');
    const [tagId, setTagId] = useState(''); // 初期値として空文字列を設定
    const [tags, setTags] = useState([]);
    const [video, setVideo] = useState(null);

    useEffect(() => {
        if(props.tags && props.tags.length > 0) {
            setTags(props.tags); // propsから受け取ったtagsをローカルステートにセット
            setTagId(props.tags[0].id); // 最初のtag.idをセット
        }
    }, [props.tags]);

    const [uploadUrl, setUploadUrl] = useState(null);

    // ...

    const getUploadUrl = async () => {
        try {
            const response = await axios.get('/api/s3-upload-url');
            console.log('response:',response)
            setUploadUrl(response.data.url);
            console.log("Obtained upload URL:", response.data.url); 
        } catch (error) {
            console.error('Error fetching upload URL: ', error);
        }
    };

    const handleUploadToS3 = async (file) => {
        if (!uploadUrl) return;

        try {
            await axios.put(uploadUrl, file, { // ここはputメソッドを使うべきです
                headers: {
                    'Content-Type': file.type,
                    'x-amz-acl': 'public-read', // 追加されたヘッダー
                },
            });
        } catch (error) {
            console.error('Error uploading to S3: ', error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // ステップ3: アップロードURLを取得
        await getUploadUrl();

        // ステップ4: S3に動画をアップロード
        if (uploadUrl) {
            await handleUploadToS3(video);
            console.log("Upload URL: ", uploadUrl);

            // ステップ5: アプリケーションサーバーにメタデータをPOST
            // FormDataインスタンスを作成
            const formData = new FormData();
            formData.append('description', description);
            formData.append('tag_id', tagId);
            formData.append('video_path', uploadUrl);  // S3のURLを送信

            // FormDataを使用してPOSTリクエストを送信
            Inertia.put('/issues', formData, {
                preserveState: true,
                only: ['tags'],
                onProgress: (event) => console.log(event.loaded / event.total),
            });
        }
    };

// import React, { useState, useEffect } from 'react';
// import { Inertia } from '@inertiajs/inertia';
// import Navbar from '../../Components/Navbar';

// function IssuesCreate(props) {
//     const [description, setDescription] = useState('');
//     const [tagId, setTagId] = useState(''); // 初期値として空文字列を設定
//     const [tags, setTags] = useState([]);
//     const [video, setVideo] = useState(null);

//     useEffect(() => {
//         if(props.tags && props.tags.length > 0) {
//             setTags(props.tags); // propsから受け取ったtagsをローカルステートにセット
//             setTagId(props.tags[0].id); // 最初のtag.idをセット
//         }
//     }, [props.tags]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         // FormDataインスタンスを作成
//         const formData = new FormData();
//         formData.append('description', description);
//         formData.append('tag_id', tagId);
//         formData.append('video', video);
    
//         // FormDataを使用してPOSTリクエストを送信
//         Inertia.post('/issues', formData, {
//             // Inertiaの{ preserveState: true }オプションは、ページ遷移後にもフォームの状態を維持します
//             preserveState: true,
//             // Inertiaの{ only: ['tags'] }オプションは、ページ遷移後にstateの`tags`だけをリフレッシュします
//             only: ['tags'],
//             // ファイルアップロードの進行状況をハンドリングするためにonProgressコールバックを提供
//             onProgress: (event) => console.log(event.loaded / event.total),
//         });
//     };

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
                            クエストビデオ:
                            <input 
                                type="file" 
                                onChange={(e) => setVideo(e.target.files[0])} 
                            />
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
