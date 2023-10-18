import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

function Navbar() {
    return (
        <nav className='h-16'>
            <ul className="flex space-x-4 justify-start back-color h-16 items-center font-bold pl-5">
                <li className="text-white"><InertiaLink href="/dashboard" className="hover:underline">Home</InertiaLink></li>
                <li className="text-white"><InertiaLink href="/issues/create" className="hover:underline">クエスト作成</InertiaLink></li>
                <li className="text-white"><InertiaLink href="/issues" className="hover:underline">クエスト一覧</InertiaLink></li>
                <li className="text-white"><InertiaLink href="/feedbacks" className="hover:underline">フィードバック一覧</InertiaLink></li>
                <li className="text-white"><InertiaLink href="/gymleaders" className="hover:underline">営業ダンジョン</InertiaLink></li>
                <li className="text-white"><InertiaLink href="/mypage" className="hover:underline">MyPage</InertiaLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
