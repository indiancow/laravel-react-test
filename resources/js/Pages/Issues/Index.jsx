import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Modal from '@/Components/Modal';
import CreateFeedback from '@/Components/CreateFeedback';


const Index = ({ issues }) => {
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
    return (
        <div>
            <Navbar />
            
            <div className='issue-big-area'>
                {/* New Videos Section */}
                <div className="video-area">
                    <h2 className='issue-index-title'>新着</h2>
                    <div className='new-videos'>
                        {issues.data.filter(issue => issue.videoUrl !== null).slice(0, 3).map((issue) => (
                            <div key={issue.id} className='issue-index-card'>
                                <video width="320" height="240" controls>
                                    <source src={issue.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className='issue-index-card-text'>
                                    <h3 className='index-title'>{issue.tag}</h3> {/* この行を追加 */}
                                    <p className='issue-index-card-username'>{issue.author}</p> {/* この行を追加 */}
                                    <p>{issue.description}</p>
                                    <button onClick={() => handleFeedbackClick(issue)}>フィードバック</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='video-area'>
                    <h2 className='issue-index-title'>すべての動画</h2>
                    <div className="new-videos" style={{ display: 'flex', overflowX: 'scroll' }}>
                        {issues.data.filter(issue => issue.videoUrl !== null).map((issue) => (
                            <div key={issue.id} className='issue-index-card'>
                                <video width="320" height="240" controls>
                                    <source src={issue.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className='issue-index-card-text'>
                                    <h3 className='index-title'>{issue.tag}</h3>
                                    <p className='issue-index-card-username'> {issue.author}</p> 
                                    <p>{issue.description}</p>
                                    <button onClick={() => handleFeedbackClick(issue)}>フィードバック</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            
                
                {/* All Text Issues Section */}
                <h2 className='issue-index-title'>クエスト</h2>
                <div className="text-issues" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                    {issues.data.filter(issue => issue.videoUrl === null).map((issue) => (
                        <div className='issue-index-card-text'>
                            <h3 className='index-title'>{issue.tag}</h3> 
                            <p className='issue-index-card-username'> {issue.author}</p> 
                            <p>{issue.description}</p>
                            <button onClick={() => handleFeedbackClick(issue)}>フィードバック</button>
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
