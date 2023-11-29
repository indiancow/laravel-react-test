import { InertiaLink } from '@inertiajs/inertia-react';

const Pagination = ({ issues }) => {
    return (
        <div className="pagination-container">
            <ul className="pagination">
                {issues.links.map((link, index) => (
                    <li key={index} className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}>
                        <InertiaLink 
                            href={link.url || '#'} 
                            className="page-link" 
                            dangerouslySetInnerHTML={{__html: link.label}}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
