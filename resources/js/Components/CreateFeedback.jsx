// CreateFeedback.jsx

import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const CreateFeedback = ({ issue, onClose }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {  
        console.log('handleSubmit is triggered');  
        e.preventDefault();
        try {
            await Inertia.post('/feedbacks', { issue_id: issue.id, content: content });
            if(onClose) {
                onClose();  // フォーム送信後にモーダルを閉じる
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    };
    
    return (
        <div>
            <p>依頼者: {issue.author}</p>
            <h1>課題タグ: {issue.tag}</h1>
            <p>課題: {issue.description}</p>
            
            <form onSubmit={handleSubmit} onClick={() => console.log('Form clicked')}>
                <div>
                    <label htmlFor="content">Feedback:</label>
                    <textarea 
                        id="content" 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                    />
                </div>
                <button type="submit" onClick={() => console.log('Button clicked')}>Submit</button>
            </form>
        </div>
    );
};

export default CreateFeedback;


// import React, { useState } from 'react';
// import { Inertia } from '@inertiajs/inertia';

// const CreateFeedback = ({ issue }) => {
//     const [content, setContent] = useState('');

//     const handleSubmit = async (e) => {  // この関数を非同期にします。
//         console.log('handleSubmit is triggered');  // ログを追加
//         e.preventDefault();
//         try {
//             // Inertia.post を await を使用して呼び出します。
//             await Inertia.post('/feedbacks', { issue_id: issue.id, content: content });
//             // 必要であれば、フォーム送信後の処理をここに追加します。
//         } catch (error) {
//             // エラーハンドリングをここで行います。
//             console.error('An error occurred while submitting the form:', error);
//         }
//     };
    
//     return (
//         <div>
//             <p>依頼者: {issue.author}</p>
//             <h1>課題タグ: {issue.tag}</h1>
//             <p>課題: {issue.description}</p>
            
//             <form onSubmit={handleSubmit} onClick={() => console.log('Form clicked')}>
//                 <div>
//                     <label htmlFor="content">Feedback:</label>
//                     <textarea 
//                         id="content" 
//                         value={content} 
//                         onChange={(e) => setContent(e.target.value)} 
//                     />
//                 </div>
//                 <button type="submit" onClick={() => console.log('Button clicked')}>Submit</button>
//             </form>
//         </div>
//     );
// };

// export default CreateFeedback;



// import React, { useState } from 'react';
// import { Inertia } from '@inertiajs/inertia';

// const CreateFeedback = ({ issue }) => {
//     const [content, setContent] = useState('');

//     const handleSubmit = (e) => {
//         console.log('handle submit is called')
//         e.preventDefault();
//         Inertia.post('/feedbacks', { issue_id: issue.id, content: content });
//     };
//     // console.log(issue)
    
//     return (
//         <div>
//             <p>依頼者: {issue.author}</p>
//             <h1>課題タグ: {issue.tag}</h1>
//             <p>課題: {issue.description}</p>
            
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="content">内容:</label>
//                     <textarea 
//                         id="content" 
//                         value={content} 
//                         onChange={(e) => setContent(e.target.value)} 
//                     />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default CreateFeedback;
