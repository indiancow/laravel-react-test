import Navbar from '@/Components/Navbar';
import React from 'react';
import axios from 'axios';

const Show = ({ gymLeader }) => {
    
    console.log(gymLeader)

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        
        try {
            console.log(gymLeader.id)
            console.log(route('answers.store', gymLeader.id));

            const response = await axios.post(route('answers.store', gymLeader.id), formData);
            // console.log(route('answers.store', gymLeader.id));
            // 成功した場合の処理
            console.log(response.data);
        } catch (error) {
            // エラー処理
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
                            {/* <p>{gymLeader.description}</p> */}
                        </div>
                    </div>
                    <img src={`/storage/${gymLeader.image_path.split('/').pop()}`} alt={`Image of ${gymLeader.name}`} className="gymleader-image" />
                </div>
                <div className='gymleader-rightarea'>
                    <form onSubmit={handleSubmit}>
                        {gymLeader.questions.map((question) => (
                            <div key={question.id} className='question-card'>
                                <p>{question.question_text}</p>
                                <textarea name={`answers[${question.id}]`} required />
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
