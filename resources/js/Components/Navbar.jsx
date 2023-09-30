// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="/dashboard">Home</a></li>
                <li><a href="/issues/create">クエスト作成</a></li>
                <li><a href="/issues">クエスト一覧</a></li>
                <li><a href="/feedbacks">フィードバック一覧</a></li>
                <li><a href="/dashboard">個人画面（未実装）</a></li>
                {/* 他のナビゲーションリンクをこちらに追加 */}
            </ul>
        </nav>
    );
}

export default Navbar;
