import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Navbar from '../../components/Navbar'; 

const Show = ({ user, users, issues, feedbacks, userSkills }) => {
    return (
        <div className='mypage-bgc mypage-text'>
            <div>
                <Navbar /> {/* Navbarコンポーネントを配置 */}
                {/* 他のコンポーネントやコンテンツ */}
            </div>
            <div>
                <h1>{user.name}'s マイページ</h1>
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
                    <h2>あなたのスキル</h2>
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
