import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import axios from 'axios';

const Show = ({ gymLeader }) => {
    const [answers, setAnswers] = useState({});  // 追加：ユーザーの回答を保存するstate

    console.log(gymLeader);

    const handleAnswerChange = (id, value) => {  // 追加：回答の変更をハンドルする関数
        setAnswers(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        gymLeader.questions.forEach(question => {
            if (answers[question.id]) {
                formData.append(`answers[${question.id}]`, answers[question.id]);
            }
        });

        try {
            console.log(gymLeader.id)
            console.log(route('answers.store', gymLeader.id));
            console.log(formData)

            const response = await axios.post(route('answers.store', gymLeader.id), formData);
            console.log(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='gymleader-bg'>
                <div className='gymleader-leftarea'>
                    <div>
                        <div className='gymleader-name'>
                            <h1 className=''>{gymLeader.name}</h1>
                        </div>
                    </div>
                    <img src={`/storage/${gymLeader.image_path.split('/').pop()}`} alt={`Image of ${gymLeader.name}`} className="gymleader-image" />
                </div>
                <div className='gymleader-rightarea'>
                    <form onSubmit={handleSubmit}>
                        {gymLeader.questions.map((question) => (
                            <div key={question.id} className='question-card'>
                                <p>{question.question_text}</p>
                                <textarea
                                    name={`answers[${question.id}]`}
                                    required
                                    value={answers[question.id] || ''}  // 修正：value属性を追加
                                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}  // 追加：onChangeハンドラを追加
                                />
                            </div>
                        ))}
                        <button type="submit">提出</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Show;



// import Navbar from '@/Components/Navbar';
// import React from 'react';
// import axios from 'axios';

// const Show = ({ gymLeader }) => {
    
//     console.log(gymLeader)

    

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const formData = new FormData(event.target);

//         // formData.append('gym_leader_question_id', gym_leader_question_id);
//         formData.append('answer_text', answer_text);
        

//         try {
//             console.log(gymLeader.id)
//             console.log(route('answers.store', gymLeader.id));
//             console.log(formData)

//             const response = await axios.post(route('answers.store', gymLeader.id), formData);
//             // console.log(route('answers.store', gymLeader.id));
//             // 成功した場合の処理
//             console.log(response.data);
//         } catch (error) {
//             // エラー処理
//             console.error("Error:", error);
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className='gymleader-bg'>
//                 <div className='gymleader-leftarea'>
//                     <div>
//                         <div className='gymleader-name'>
//                             <h1 className=''>{gymLeader.name}</h1>
//                             {/* <p>{gymLeader.description}</p> */}
//                         </div>
//                     </div>
//                     <img src={`/storage/${gymLeader.image_path.split('/').pop()}`} alt={`Image of ${gymLeader.name}`} className="gymleader-image" />
//                 </div>
//                 <div className='gymleader-rightarea'>
//                     <form onSubmit={handleSubmit}>
//                         {gymLeader.questions.map((question) => (
//                             <div key={question.id} className='question-card'>
//                                 <p>{question.question_text}</p>
//                                 <textarea name={`answers[${question.id}]`} required />
//                             </div>
//                         ))}
//                         <button type="submit">提出</button>
//                     </form>
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default Show;
