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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {pendingRecords.map((record) => (
                        record.user.id !== auth.user.id ? (
                        <div key={record.id} className="mb-4 p-4 border rounded shadow-lg bg-white">
                            {/* User and Gym Leader Details */}
                            <strong>User:</strong> {record.user.name}<br />
                            <strong>GymLeader:</strong> {record.gym_leader.name}<br />
                            <strong>Attempt Count:</strong> {record.attempt_count}<br />
                            <button onClick={() => handleClear(record.id)}>合格</button>
                            <button onClick={() => handleFail(record.id)}>不合格</button>
                            {record.gym_leader.questions?.map((question) => (
                                <div key={question.id} className="mt-4 p-4 border rounded shadow-lg bg-gray-100">
                                    <strong>Question:</strong> {question.question_text}<br />
                                    {question.answers
                                        .filter(answer => answer.user_id === record.user.id)
                                        .map((answer) => (
                                        <div key={answer.id} className="mt-2 p-2 border rounded bg-white">
                                            <strong>Answer:</strong> {answer.answer_text}<br />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        ):null
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