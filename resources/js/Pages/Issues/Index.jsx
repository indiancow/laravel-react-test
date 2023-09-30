import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

import Navbar from '../../components/Navbar'; 
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard';
// import OtherComponent from '../OtherComponent';

function IssuesIndex({ issues }) {
    return (
        <div>
            <h1>Issues</h1>
            <table>
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map(issue => (
                        <tr key={issue.id}>
                            <td>{issue.tag}</td>
                            <td>{issue.author}</td>
                            <td>{issue.description}</td>
                            <td>{issue.createdAt}</td>
                            <td>
                                {/* InertiaLinkを使用して、フィードバックページへのリンクを作成。idをパラメータとして渡す */}
                                <InertiaLink href={`/feedbacks/create/${issue.id}`}>Add Feedback</InertiaLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <Navbar /> {/* Navbarコンポーネントを配置 */}
                <h1>Issues Index</h1>
                {/* 他のコンポーネントやコンテンツ */}
            </div>
        </div>
        
    );
}


export default IssuesIndex;
