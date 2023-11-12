import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Navbar from '../../components/Navbar';
import UserSelector from '../../components/UserSelector';

// const MySvgComponent = ({level}) => {
//     console.log(level)
//     if(level >= 1 && level < 30) {
//         return <MySvgComponentLevel1 />;
//     } else if(level >= 30 && level < 70) {
//         return <MySvgComponentLevel2 />;
//     } else if(level >= 70 && level <= 100) {
//         return <MySvgComponentLevel3 />;
//     } else {
//         return <p>無効なレベルです。</p>;
//     }
// };

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
    const stoicSkill = userSkills.find(skill => skill.skill.name === "ストイック");

    const selectedCharacter = getCharacterBasedOnSkills(character, giverSkill?.level || 0, seekerSkill?.level || 0);
    // console.log(seekerSkill)
    console.log(selectedCharacter.image_path)

    return (
        <div className='mypage-bgc mypage-text'>
            <Navbar />
            <div className='flex'>
                <p>{userSkills.level}</p>
                {/* Left Section */}
                <div className='mycard-left-section overflow-y-auto'>
                    <div className='mypage-username-card'>
                        <div className='mypage-username-card-leftarea'>
                            <h1 className='mypage-username'>{user.name}'s マイページ</h1>
                            {selectedCharacter ? (
                                <>
                                    <h2 className='mypage-character-name'>{selectedCharacter.name}</h2>
                                    <h3 className='mypage-character-subtitle'>{selectedCharacter.subtitle}</h3>
                                    <div className='mypage-character-description'>
                                        <p>{selectedCharacter.description}</p>
                                    </div>
                                </>
                            ) : (
                                <p>No character selected</p>
                            )}
                            {/* Giver と 探求者 のスキルを表示 */}
                            <div className='giver-seeker-level'>
                                {/* Giver Level */}
                                {giverSkill && (
                                    <div className='mypage-giver-level'>
                                        <div className='flex skill-text'>
                                            <p className='skill-name'>{giverSkill.skill.name}</p>
                                            <div className='levels-container'>
                                                <p className='level-text'>Lv. </p>
                                                <p className='skill-level'>{giverSkill.level}</p>
                                                <p className='skill-max'>/100</p>
                                            </div>
                                        </div>
                                        <div className='skill-progress-container'>
                                            <div 
                                                className='skill-progress-bar' 
                                                style={{ width: `${(giverSkill.level / 100) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}

                                {/* Seeker Level */}
                                {seekerSkill && (
                                    <div className='mypage-seeker-level'>
                                        <div className='flex skill-text'>
                                            <p className='skill-name'>{seekerSkill.skill.name}</p>
                                            <div className='levels-container'>
                                                <p className='level-text'>Lv. </p>
                                                <p className='skill-level'>{seekerSkill.level}</p>
                                                <p className='skill-max'>/100</p>
                                            </div>
                                        </div>
                                        <div className='skill-progress-container'>
                                            <div 
                                                className='skill-progress-bar' 
                                                style={{ width: `${(seekerSkill.level / 100) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}

                                {/* Stoic Level */}
                                {stoicSkill && (
                                    <div className='mypage-stoic-level'>
                                        <div className='flex skill-text'>
                                            <p className='skill-name'>{stoicSkill.skill.name}</p>
                                            <div className='levels-container'>
                                                <p className='level-text'>Lv. </p>
                                                <p className='skill-level'>{stoicSkill.level}</p>
                                                <p className='skill-max'>/100</p>
                                            </div>
                                        </div>
                                        <div className='skill-progress-container'>
                                            <div 
                                                className='skill-progress-bar' 
                                                style={{ width: `${(stoicSkill.level / 100) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='mypage-username-card-rightarea'>
                            <UserSelector users={users} />
                            <img src={`/storage/${selectedCharacter.image_path}`} alt={selectedCharacter.name} className='mypage-character' />
                        </div>
                    </div>
                    <div>
                        <div className="card-container">
                            {userSkills.map((userSkill, index) => (
                                userSkill.skill.name !== 'Giver' && userSkill.skill.name !== '探求者' && userSkill.skill.name !== 'ストイック' && (
                                    <div key={userSkill.id} className={`skill-card ${index % 2 === 0 ? 'left-card' : 'right-card'}`}>
                                        <div className='flex'>
                                            <div className='sales-level-text'>
                                                <h3 className='skill-card-name'>{userSkill.skill.name}</h3>
                                                <p>{userSkill.skill.description}</p>
                                            </div>
                                            <div className='levels-container'>
                                                <p className='level-text'>Lv. </p>
                                                <p className='skill-level'>{userSkill.level}</p>
                                                <p className='skill-max'>/100</p>
                                            </div>
                                        
                                            <div className='skill-progress-container'>
                                                <div 
                                                    className='skill-progress-bar' 
                                                    style={{ width: `${(userSkill.level / 100) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                    </div>
                </div>
                {/* Right Section */}
                <div className='mycard-right-section overflow-y-auto'>
                    {/* これまでの課題 */}
                    <div>
                        <h2>あなたのこれまでの課題</h2>
                        {issues.map(issue => (
                            <div key={issue.id} className="issue-card">
                                <div className='issue-title'>
                                    <h3>{issue.tag.name}</h3>
                                </div>
                                <div className='issue-content'>
                                    <p>{issue.description}</p>
                                    {/* <p>{new Date(issue.created_at).toLocaleDateString()}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* フィードバック */}
                    <div>
                        <h2>あなたがもらったフィードバック</h2>
                        {feedbacks.map((feedback) => (
                            <div key={feedback.id} className="feedback-card">
                                <div className='feedback-title'>
                                    <h3>{feedback.issue.tag.name}</h3>
                                </div>
                                <div className='feedback-content'>
                                    <p className='feedback-text'>{feedback.content}</p>
                                    <p className='feedbacked-by'>
                                        <InertiaLink href={`/mypage/${feedback.user_id}`}>
                                            {users.find((u) => u.id === feedback.user_id).name}
                                        </InertiaLink>
                                    </p>
                                    {/* <p>{new Date(feedback.created_at).toLocaleDateString()}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Show;