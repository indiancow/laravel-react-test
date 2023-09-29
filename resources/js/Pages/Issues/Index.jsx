import React from 'react';

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
                    </tr>
                </thead>
                <tbody>
                    {issues.map(issue => (
                        <tr key={issue.id}>
                            <td>{issue.tag}</td>
                            <td>{issue.author}</td>
                            <td>{issue.description}</td>
                            <td>{issue.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default IssuesIndex;