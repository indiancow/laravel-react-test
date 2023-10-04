import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

function LoginRegisterButton(){
    return (
        <div className="fixed top-0 right-0 p-6">
            <InertiaLink href={route('register')} className="ml-4 inline-block bg-blue-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded">
                ユーザー登録
            </InertiaLink>
            <InertiaLink href={route('login')} className="ml-4 inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                ログイン
            </InertiaLink>
        </div>
    )
}

export default LoginRegisterButton;