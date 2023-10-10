import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Navbar from '../../components/Navbar';
import UserSelector from '../../components/UserSelector';

const Show = ({ user, users, issues, feedbacks, userSkills }) => {
    return (
        <div className='mypage-bgc mypage-text'>
            <Navbar />
            <div className='flex'>
                {/* Left Section */}
                <div className='mycard-left-section w-3/4 overflow-y-auto'>
                    <div className='mypage-username-card'>
                        <h1 className='mypage-username'>{user.name}'s マイページ</h1>
                    </div>
                    <UserSelector users={users} />
                    <div>
                        <h2>あなたのスキル</h2>
                        <div className="card-container">
                            {userSkills.map(userSkill => (
                                <div key={userSkill.id} className="skill-card">
                                    <div className='flex'>
                                        <div>
                                            <h3 className='skill-card-name'>{userSkill.skill.name}</h3>
                                            <p>{userSkill.skill.description}</p>
                                        </div>
                                        <div className='level-component'>
                                            <p>レベル: Lv <span className='skill-card-level'>{userSkill.level}</span></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className='mycard-right-section w-1/4 overflow-y-auto'>
                    {/* これまでの課題 */}
                    <div>
                        <h2>あなたのこれまでの課題</h2>
                        {issues.map(issue => (
                            <div key={issue.id} className="issue-card flex">
                                <h3>{issue.tag.name}</h3>
                                <div className='issue-details'>
                                    <p>{issue.description}</p>
                                    <p>{new Date(issue.created_at).toLocaleDateString()}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    {/* フィードバック */}
                    <div>
                        <h2>あなたがもらったフィードバック</h2>
                        {feedbacks.map((feedback) => (
                            <div key={feedback.id} className="feedback-card">
                                <h3>{feedback.issue.tag.name}</h3>
                                <p>{feedback.content}</p>
                                <p>
                                    <InertiaLink href={`/mypage/${feedback.user_id}`}>
                                        {users.find((u) => u.id === feedback.user_id).name}
                                    </InertiaLink>
                                </p>
                                <p>{new Date(feedback.created_at).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;







// import React from 'react';
// import { InertiaLink } from '@inertiajs/inertia-react';
// import Navbar from '../../components/Navbar'; 
// import UserSelector from '../../components/UserSelector'; 

// const Show = ({ user, users, issues, feedbacks, userSkills }) => {
//     return (
//         <div className='mypage-bgc mypage-text'>
//             <div>
//                 <Navbar />{/* Navbarコンポーネントを配置 */}
//                 {/* 他のコンポーネントやコンテンツ */}
//             </div>
//             <div>
//                 <div className='flex'>
//                     <div className='mypage-username-card w-1/2'>
//                         <h1 className='mypage-username'>{user.name}'s マイページ</h1>
//                     </div>
//                     <UserSelector users={users} />
//                 </div>
                
//                 <div>
//                     <div>
//                         <h2>あなたのスキル</h2>
//                         <div className="card-container">
//                             {userSkills.map(userSkill => (
//                             <div key={userSkill.id} className="skill-card">
//                                 <div className='flex'>
//                                     <div>
//                                         <h3 className='skill-card-name'>{userSkill.skill.name}</h3>
//                                         <p>{userSkill.skill.description}</p>
//                                     </div>
//                                     <div className='level-component'>
//                                         <p>レベル: Lv <span className='skill-card-level'>{userSkill.level}</span></p>
//                                     </div> 
//                                 </div>
//                             </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div>
//                         {/* 他のコンポーネントや要素 */}
//                         <h2>あなたのこれまでの課題</h2>
//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th>課題タグ</th>
//                                     <th>説明</th>
//                                     <th>作成日時</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {issues.map(issue => (
//                                     <tr key={issue.id}>
//                                         <td>{issue.tag.name}</td> {/* もしtagがnullの可能性があれば、条件レンダリングを検討してください */}
//                                         <td>{issue.description}</td>
//                                         <td>{new Date(issue.created_at).toLocaleDateString()}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <div>
//                         <h2>あなたがもらったフィードバック</h2>
//                         <table>
//                             <thead>
//                             <tr>
//                                 <th>課題タグ</th>
//                                 <th>コンテンツ</th>
//                                 <th>フィードバック作成者</th>
//                                 <th>作成日時</th>
//                             </tr>
//                             </thead>
//                             <tbody>
//                             {feedbacks.map((feedback) => (
//                                 <tr key={feedback.id}>
//                                 <td>{feedback.issue.tag.name}</td>
//                                 <td>{feedback.content}</td>
//                                 <td>
//                                     <InertiaLink href={`/mypage/${feedback.user_id}`}>
//                                     {users.find((u) => u.id === feedback.user_id).name}
//                                     </InertiaLink>
//                                 </td>
//                                 <td>{new Date(feedback.created_at).toLocaleDateString()}</td>
//                                 </tr>
//                             ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     );
// };

// export default Show;
