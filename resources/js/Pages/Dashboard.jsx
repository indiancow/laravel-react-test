import React, { useState,useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Navbar from '../components/Navbar'; 
import '../../css/app.css';
import ApplicationLogo from '@/Components/ApplicationLogo';
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard({ auth, pendingRecords, tags }) {
    console.log(pendingRecords)
    const [description, setDescription] = useState('');
    const [tagId, setTagId] = useState('');
    // const [tags, setTags] = useState([]);
    const [video, setVideo] = useState(null);
    const [uploadUrl, setUploadUrl] = useState(null);


    const handleClear = async (recordId) => {
        try {
            const response = await fetch(`/api/clear/${recordId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                alert('合格を送信しました。');
                // Successfully updated. You might want to update the UI or redirect.
            } else {
                console.error("Failed to clear the record.");
            }
        } catch (error) {
            console.error("There was an error clearing the record:", error);
        }
    };

    const handleFail = async (recordId) => {
        try {
            const response = await fetch(`/api/fail/${recordId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                alert('不合格を送信しました。');
                // Successfully updated. You might want to update the UI or redirect.
            } else {
                console.error("Failed to set the record to fail.");
            }
        } catch (error) {
            console.error("There was an error setting the record to fail:", error);
        }
    };

     // モーダルの表示非表示を管理するためのstate
    const [showModal, setShowModal] = useState(false);

    // モーダルを開く関数
    const openModal = () => {
        setShowModal(true);
    }

    // モーダルを閉じる関数
    const closeModal = () => {
        setShowModal(false);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        // FormDataインスタンスを作成
        const formData = new FormData();
        formData.append('description', description);
        formData.append('tag_id', tagId);
        if (video) formData.append('video', video); // ビデオファイルも追加

        // FormDataを使用してPOSTリクエストを送信
        Inertia.post('/issues', formData, {
            preserveState: true,
            only: ['tags'],
            onProgress: (event) => console.log(event.loaded / event.total),
        });
        // ステップ3: アップロードURLを取得
        // await getUploadUrl();

        // // ステップ4: S3に動画をアップロード
        // if (uploadUrl) {
        //     await handleUploadToS3(video);
        //     console.log("Upload URL: ", uploadUrl);

        //     // ステップ5: アプリケーションサーバーにメタデータをPOST
        //     // FormDataインスタンスを作成
        //     const formData = new FormData();
        //     formData.append('description', description);
        //     formData.append('tag_id', tagId);
        //     formData.append('video_path', uploadUrl);  // S3のURLを送信

        //     // FormDataを使用してPOSTリクエストを送信
        //     Inertia.post('/issues', formData, {
        //         preserveState: true,
        //         only: ['tags'],
        //         onProgress: (event) => console.log(event.loaded / event.total),
        //     });
        // }
    };

    return (
        <div className='back-color'>
            <Navbar />
            <Head title="Dashboard" />

            {/* クエスト作成ボタン */}
            <button onClick={openModal}>クエスト作成</button>

            {/* モーダル */}
            {showModal && (
                <div className='overlay'>
                    <div className="quest-modal over">
                        <h2>クエスト作成</h2>
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
                        <button onClick={closeModal}>閉じる</button>
                    </div>
                </div>
            )}

            {auth.user.is_manager == 1 && (
                <div className="record-container">
                    {pendingRecords.map((record) => (
                        record.user.id !== auth.user.id ? (
                        <div key={record.id} className="record-card">
                            <div className='record-header'>
                                <div className="record-details">
                                    <p className='record-username'>{record.user.name}</p>
                                    <p className='record-gymleader'>営業ダンジョン：{record.gym_leader.name}</p>
                                </div>
                                <div className="record-actions">
                                    <button className="btn-clear" onClick={() => handleClear(record.id)}>合格</button>
                                    <button className="btn-fail" onClick={() => handleFail(record.id)}>不合格</button>
                                </div>
                            </div>
                            <div className='dashboard-question-area'>
                                {record.gym_leader.questions?.map((question) => (
                                    <div key={question.id} className="dashboard-question-card">
                                        <p className='dashboard-question-text'>Q. {question.question_text}</p>
                                        {question.answers
                                            .filter(answer => answer.user_id === record.user.id)
                                            .map((answer) => (
                                            <div key={answer.id} className="answer-card">
                                                <p>A. {answer.answer_text}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        ) : null
                    ))}
                </div>
            )}

            <div className='dashboard-subtitle'>
                <h2 className='dashboard-subtitle'>
                    チカラを合わせてセカイを救え！
                </h2>
            </div>

            <ApplicationLogo />
        </div>
    );
}