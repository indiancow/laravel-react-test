import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Navbar from '../../components/Navbar'; 
import UserSelector from '../../components/UserSelector'; 

const Show = ({ user, users, issues, feedbacks, userSkills }) => {
    return (
        <div className='mypage-bgc mypage-text'>
            <div>
                <Navbar />{/* Navbarコンポーネントを配置 */}
                {/* 他のコンポーネントやコンテンツ */}
            </div>
            <div>
                <div className='flex'>
                    <div className='mypage-username-card w-1/2'>
                        <h1 className='mypage-username'>{user.name}'s マイページ</h1>
                    </div>
                    <UserSelector users={users} />
                    {/* <div>
                        <h2>Other Users</h2>
                        <select onChange={(e) => {
                            const userId = e.target.value;
                            if (userId) {
                                // userIdが存在すればMyPageに遷移
                                window.location.href = `/mypage/${userId}`;
                            }
                        }}>
                            <option value="">ユーザーを選択</option>
                            {users.map((otherUser) => (
                                <option key={otherUser.id} value={otherUser.id}>
                                    {otherUser.name}
                                </option>
                            ))}
                        </select>
                    </div> */}
                </div>
                
                <div>
                    <div>
                        <h2>あなたのスキル</h2>
                        <div className="card-container">
                            {userSkills.map(userSkill => (
                            <div key={userSkill.id} className="skill-card">
                                <h3 className='skill-card-name'>{userSkill.skill.name}</h3>
                                <p>{userSkill.skill.description}</p>
                                <p>レベル: Lv <span className='skill-card-level'>{userSkill.level}</span></p>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        {/* 他のコンポーネントや要素 */}
                        <h2>あなたのこれまでの課題</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>課題タグ</th>
                                    <th>説明</th>
                                    <th>作成日時</th>
                                </tr>
                            </thead>
                            <tbody>
                                {issues.map(issue => (
                                    <tr key={issue.id}>
                                        <td>{issue.tag.name}</td> {/* もしtagがnullの可能性があれば、条件レンダリングを検討してください */}
                                        <td>{issue.description}</td>
                                        <td>{new Date(issue.created_at).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2>あなたがもらったフィードバック</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>課題タグ</th>
                                <th>コンテンツ</th>
                                <th>フィードバック作成者</th>
                                <th>作成日時</th>
                            </tr>
                            </thead>
                            <tbody>
                            {feedbacks.map((feedback) => (
                                <tr key={feedback.id}>
                                <td>{feedback.issue.tag.name}</td>
                                <td>{feedback.content}</td>
                                <td>
                                    <InertiaLink href={`/mypage/${feedback.user_id}`}>
                                    {users.find((u) => u.id === feedback.user_id).name}
                                    </InertiaLink>
                                </td>
                                <td>{new Date(feedback.created_at).toLocaleDateString()}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Show;
