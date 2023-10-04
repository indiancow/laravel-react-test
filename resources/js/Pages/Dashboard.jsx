import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Navbar from '../components/Navbar'; 
import '../../css/app.css';
import ApplicationLogo from '@/Components/ApplicationLogo';

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
                <ApplicationLogo/>
                
            {/* </AuthenticatedLayout> */}
        </div>
        
    );
}
