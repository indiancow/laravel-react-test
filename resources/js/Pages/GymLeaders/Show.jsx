import Navbar from '@/Components/Navbar';
import React from 'react';
import axios from 'axios';

const Show = ({ gymLeader }) => {
    
    // console.log(gymLeader)

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
            <h1>{gymLeader.name}</h1>
            <p>{gymLeader.description}</p>
            <h2>Questions</h2>
            <form onSubmit={handleSubmit}>
                {gymLeader.questions.map((question) => (
                    <div key={question.id}>
                        <p>{question.question_text}</p>
                        <textarea name={`answers[${question.id}]`} required />
                    </div>
                ))}
                <button type="submit">Submit Answers</button>
            </form>
        </div>
    );
};

export default Show;
