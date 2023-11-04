import React, { useState,useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Navbar from '../components/Navbar'; 
import '../../css/app.css';
import ApplicationLogo from '@/Components/ApplicationLogo';
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard({ auth, pendingRecords, tags, dailyMissions }) {
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
                console.log(recordId)
                alert('合格を送信しました。');
                // Successfully updated. You might want to update the UI or redirect.
            }
            // ここでuser_skillのレベルを更新するAPIを呼び出す
            const levelUpResponse = await fetch(`/api/user-skill/level-up`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' }
            });
            
            if (!levelUpResponse.ok) {
                console.error("Failed to level up the user skill.");
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

    useEffect(() => {
        if (showModal && tags.length > 0) {
            setTagId(tags[0].id);
            }
        }, [showModal, tags]);
        
    const handleSubmit = async (e) => {
        e.preventDefault();

        // FormDataインスタンスを作成
        const formData = new FormData();
        formData.append('description', description);
        formData.append('tag_id', tagId);
        if (video) formData.append('video', video); // ビデオファイルも追加

        // console.log(formData)
        // console.log('ポスト直前')
        // FormDataを使用してPOSTリクエストを送信
        // 一回、選択肢を選ばないとエラーになるので注意。
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
        <div>
            <div className='back-color'>
                <Navbar />
                <Head title="Dashboard" />
                <div className='dashboard-subtitle'>
                    <h2 className='dashboard-subtitle'>
                        チカラを合わせてセカイを救え！
                    </h2>
                </div>
                <ApplicationLogo />

                {/* クエスト作成ボタン */}
                <div className='toppage-quest-component'>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="148" height="38" viewBox="0 0 148 38" fill="none">
                <path d="M0.122314 13.7722C0.122314 6.166 6.28832 0 13.8945 0H133.253C140.859 0 147.025 6.166 147.025 13.7722V24.1013C147.025 31.7074 140.859 37.8734 133.253 37.8734H13.8945C6.28833 37.8734 0.122314 31.7074 0.122314 24.1013V13.7722Z" fill="black"/>
                </svg> */}
                    <button className='toppage-quest' onClick={openModal}>クエスト作成</button>
                </div>

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
            </div>
            {/* manager gymleader check area */}
            {auth.user.is_manager === 1 && pendingRecords.some(record => record.user.id !== auth.user.id) && (
                <div className="record-container">
                    <h2>営業ダンジョン 回答内容</h2>
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
            {/* daily mission area */}
            {/* <div className="daily-mission-container">
                <h2>デイリーミッション</h2>
                <div className="daily-mission-list">
                    {dailyMissions.map((mission) => (
                        <div key={mission.id} className="daily-mission-card">
                            <h3>{mission.name}</h3>
                            <p>{mission.description}</p>
                            <p>目標回数: {mission.target_count}</p>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="daily-mission-container">
                <h2>デイリーミッション</h2>
                <div className="daily-mission-list">
                    {dailyMissions.map((mission) => (
                        <div key={mission.id} className="daily-mission-card">
                            <h3 className='daily-mission-mark'>デイリーミッション</h3>
                            <img className='daily_mission_img' src="http://localhost/storage/dailymission.png" alt="" />
                            {/* <h3>{mission.name}</h3> */}
                            <p className="mission-description">{mission.description}</p>
                            <p className="mission-progress-info">進捗度: 現在{mission.current_count}/目標{mission.target_count}</p>
                            <div className="progress-bar-container">
                                <div 
                                    className="progress-bar" 
                                    style={{
                                        width: `${Math.min(mission.current_count / mission.target_count, 1) * 100}%`,
                                        backgroundColor: mission.current_count >= mission.target_count ? 'green' : 'orange'
                                    }}
                                >
                                    <span className="progress-percentage">{`${Math.round(Math.min(mission.current_count / mission.target_count, 1) * 100)}%`}</span>
                                </div>
                            </div>
                            {mission.current_count >= mission.target_count ? (
                                <p className="mission-completed">ミッション達成！</p>
                            ) : (
                                <p className="mission-progress">もう少しで達成！</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
}