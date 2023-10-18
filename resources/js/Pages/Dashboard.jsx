import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Navbar from '../components/Navbar'; 
import '../../css/app.css';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Dashboard({ auth, pendingRecords }) {
    console.log(pendingRecords)

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
    return (
        <div className='back-color'>
            <Navbar />

            <Head title="Dashboard" />

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