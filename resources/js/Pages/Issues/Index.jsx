import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

import Navbar from '../../components/Navbar'; 
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard';
// import OtherComponent from '../OtherComponent';

function IssuesIndex({ issues }) {
    return (
        <div className=''>
            <div>
                <Navbar />
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-6">クエスト一覧</h1>
                <div className=" gap-6 px-20">
                    {issues.data.map(issue => (
                        <div key={issue.id} className="bg-white p-6 rounded-lg shadow-xl px-70 m-8">
                            <h2 className="text-2xl font-semibold mb-2 index-title">{issue.tag}</h2>
                            <p className="text-sm mb-4">
                                <span className="font-semibold">作成者:</span> {issue.author}
                            </p>
                            <video width="320" height="240" controls>
                                <source src={issue.videoUrl} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <p className="text-sm mb-4">
                            <span className="font-semibold">内容:</span> {issue.description}</p>
                            <p className="text-sm mb-4">
                                <span className="font-semibold">作成日:</span> {issue.createdAt}
                            </p>
                            <InertiaLink 
                                href={`/feedbacks/create/${issue.id}`}
                                className="text-indigo-500 hover:text-indigo-700"
                            >
                                Add Feedback
                            </InertiaLink>
                        </div>
                    ))}
                </div>

            </div>
            <Pagination links={issues.links} />
            
        </div>
        
    );
}

function Pagination({ links }) {
    return (
        <nav className='flex justify-center'>
            {links.map((link, index) => (
                <InertiaLink 
                    key={index} 
                    href={link.url} 
                    className={`px-4 py-2 mx-1 rounded-lg ${link.active ? 'bg-indigo-500 text-white' : 'text-indigo-500'}`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </nav>
    );
}

export default IssuesIndex;
