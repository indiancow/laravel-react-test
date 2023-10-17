import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Navbar from '../../components/Navbar';
import UserSelector from '../../components/UserSelector';

const MySvgComponent = ({level}) => {
    console.log(level)
    if(level >= 1 && level < 30) {
        return <MySvgComponentLevel1 />;
    } else if(level >= 30 && level < 70) {
        return <MySvgComponentLevel2 />;
    } else if(level >= 70 && level <= 100) {
        return <MySvgComponentLevel3 />;
    } else {
        return <p>無効なレベルです。</p>;
    }
};

const getCharacterBasedOnSkills = (character, giverSkillLevel, seekerSkillLevel) => {
    // あなたのロジックに基づいてキャラクターを選択します。 
    if (giverSkillLevel < 30 && seekerSkillLevel < 30) {
        return character[0];
    } else if (giverSkillLevel >= 30 && giverSkillLevel < 70 && seekerSkillLevel >= 30 && seekerSkillLevel < 70) {
        return character[1];
    } else if (giverSkillLevel >= 70 && seekerSkillLevel >= 70) {
        return character[2];
    } else {
        // デフォルトキャラクターを返すか、nullを返して選択されていないことを示す。
        return null;
    }
};

const Show = ({ user, users, issues, feedbacks, userSkills, character }) => {

    const giverSkill = userSkills.find(skill => skill.skill.name === "Giver");
    const seekerSkill = userSkills.find(skill => skill.skill.name === "探求者");

    const selectedCharacter = getCharacterBasedOnSkills(character, giverSkill?.level || 0, seekerSkill?.level || 0);
    // console.log(seekerSkill)
    console.log(selectedCharacter.image_path)

    return (
        <div className='mypage-bgc mypage-text'>
            <Navbar />
            <div className='flex'>
                <p>{userSkills.level}</p>
                {/* Left Section */}
                <div className='mycard-left-section w-3/4 overflow-y-auto'>
                    <div className='mypage-username-card'>
                        <h1 className='mypage-username'>{user.name}'s マイページ</h1>
                        {selectedCharacter ? (
                            <>
                                <p>{selectedCharacter.name}</p>
                                <p>{selectedCharacter.subtitle}</p>
                                <p>{selectedCharacter.description}</p>
                                <img src={`/storage/${selectedCharacter.image_path}`} alt={selectedCharacter.name} />
                            </>
                        ) : (
                            <p>No character selected</p>
                        )}
                        {/* Giver と 探求者 のスキルを表示 */}
                        {giverSkill && (
                            <p>{giverSkill.skill.name}: Lv {giverSkill.level}</p>
                        )}
                        {seekerSkill && (
                            <p>{seekerSkill.skill.name}: Lv {seekerSkill.level}</p>
                        )}
                        <MySvgComponent />
                    </div>
                    <UserSelector users={users} />
                    <div>
                        <h2>あなたのスキル</h2>
                        <div className="card-container">
                            {/* それ以外のスキルを表示 */}
                            {userSkills.map(userSkill => (
                                userSkill.skill.name !== 'Giver' && userSkill.skill.name !== '探求者' && (
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
                                )
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