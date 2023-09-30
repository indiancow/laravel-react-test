// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                {/* 他のナビゲーションリンクをこちらに追加 */}
            </ul>
        </nav>
    );
}

export default Navbar;
