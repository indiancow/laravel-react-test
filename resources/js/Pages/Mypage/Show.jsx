import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Navbar from '../../components/Navbar'; 

const Show = ({ user, users, issues, feedbacks, userSkills }) => {
    return (
        <div>
            <h1>{user.name}'s Mypage</h1>
            
            <div>
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

                {/* <select>
                {users.map((otherUser) => (
                    <option key={otherUser.id}>
                    <InertiaLink href={`/mypage/${otherUser.id}`}>{otherUser.name}</InertiaLink>
                    </option>
                ))}
                </select> */}
            </div>
            
            <div>
                <h2>User Info</h2>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>スキル名</th>
                                <th>説明</th>
                                <th>レベル</th>
                                <th>経験値</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userSkills.map(userSkill => (
                                <tr key={userSkill.id}>
                                    <td>{userSkill.skill.name}</td>
                                    <td>{userSkill.skill.description}</td>
                                    <td>{userSkill.level}</td>
                                    <td>{userSkill.experience}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    {/* 他のコンポーネントや要素 */}
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
                <p>Received Feedback: {feedbacks.map(feedback => (
                <div key={feedback.id}>
                    {feedback.content}
                    {/* 他のフィードバック情報も表示 */}
                </div>
                ))}</p>
            </div>
            <div>
                <Navbar /> {/* Navbarコンポーネントを配置 */}
                {/* 他のコンポーネントやコンテンツ */}
            </div>
        </div>
    );
};

export default Show;
