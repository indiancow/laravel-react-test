// Navbar.jsx
import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><InertiaLink href="/dashboard">Home</InertiaLink></li>
                <li><InertiaLink href="/issues/create">クエスト作成</InertiaLink></li>
                <li><InertiaLink href="/issues">クエスト一覧</InertiaLink></li>
                <li><InertiaLink href="/feedbacks">フィードバック一覧</InertiaLink></li>
                <li><InertiaLink href="/mypage">MyPage</InertiaLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;


// // Navbar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//     return (
//         <nav>
//             <ul>
//                 <li><a href="/dashboard">Home</a></li>
//                 <li><a href="/issues/create">クエスト作成</a></li>
//                 <li><a href="/issues">クエスト一覧</a></li>
//                 <li><a href="/feedbacks">フィードバック一覧</a></li>
//                 {/* 他のナビゲーションリンクをこちらに追加 */}
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;
