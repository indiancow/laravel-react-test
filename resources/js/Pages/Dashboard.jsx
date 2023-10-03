import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Navbar from '../components/Navbar'; 
import '../../css/app.css';

export default function Dashboard({ auth }) {
    return (
        <div className='back-color'>
            <div>
                <Navbar />
                {/* 他のコンポーネントやコンテンツ */}
            </div>
            {/* <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            > */}
                <Head title="Dashboard" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">You're logged in!</div>
                        </div>
                    </div>
                </div>
                <div className='dashboard-subtitle'>
                    <h2 className='dashboard-subtitle'>
                        チカラを合わせてセカイを救え！
                    </h2>
                </div>
                <div className='flex items-center justify-center'>
                    <img src="http://localhost/storage/20230831_feedo_logo_black@4x.png" className='w-1/2' alt="" />
                </div>
                
            {/* </AuthenticatedLayout> */}
        </div>
        
    );
}
