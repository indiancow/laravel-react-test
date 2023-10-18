import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Modal from '@/Components/Modal';
import CreateFeedback from '@/Components/CreateFeedback';


const Index = ({ issues }) => {
    console.log(issues.data)
    const createFeedback = (issueId) => {
        // Navigate to the feedback creation page
        window.location.href = `/feedbacks/create/${issueId}`;
    };
    const [showModal, setShowModal] = useState(false);
    const [selectedIssue, setSelectedIssue] = useState(null);
    
    const handleFeedbackClick = (issue) => {
        setSelectedIssue(issue);
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const defaultStorageUrl = "http://localhost/storage/";
    return (
        <div>
            <Navbar />
            
            <div className='issue-big-area'>
                {/* New Videos Section */}
                <div className="video-area">
                    <h2 className='issue-index-title'>新着</h2>
                    <div className='new-videos'>
                        {issues.data.filter(issue => issue.videoUrl !== defaultStorageUrl).map((issue) => (

                            <div key={issue.id} className='issue-index-card'>
                                <video width="320" height="240" controls>
                                    <source src={issue.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className='issue-index-card-text'>
                                    <h3 className='index-title'>{issue.tag}</h3> {/* この行を追加 */}
                                    <p className='issue-index-card-username'>{issue.author}</p> {/* この行を追加 */}
                                    <p>{issue.description}</p>
                                    <button onClick={() => handleFeedbackClick(issue)} className="timeline-button">フィードバック</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='video-area'>
                    <h2 className='issue-index-title'>すべての動画</h2>
                    <div className="new-videos" style={{ display: 'flex', overflowX: 'scroll' }}>
                        {issues.data.filter(issue => issue.videoUrl !== defaultStorageUrl).map((issue) => (
                            <div key={issue.id} className='issue-index-card'>
                                <video width="320" height="240" controls>
                                    <source src={issue.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className='issue-index-card-text'>
                                    <h3 className='index-title'>{issue.tag}</h3>
                                    <p className='issue-index-card-username'> {issue.author}</p> 
                                    <p>{issue.description}</p>
                                    <button onClick={() => handleFeedbackClick(issue)} className="timeline-button">フィードバック</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="timeline-container">
                    <h2 className='issue-index-title'>クエスト</h2>
                    {issues.data.filter(issue => issue.videoUrl === defaultStorageUrl).map((issue) => (
                        <div className="timeline-card">
                            <h3 className="timeline-title">{issue.tag}</h3> 
                            <p className="timeline-username">@{issue.author}</p> 
                            <p className="timeline-description">{issue.description}</p>
                            <button className="timeline-button" onClick={() => handleFeedbackClick(issue)}>フィードバック</button>
                        </div>
                    ))}
                </div>

            </div>
            {showModal && selectedIssue && (
                <Modal show={showModal} onClose={() => setShowModal(false)}>
                    <CreateFeedback issue={selectedIssue} onClose={handleCloseModal} />
                </Modal>
            )}
        </div>
    );
};

export default Index;
