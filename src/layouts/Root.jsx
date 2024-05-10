import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <>
            <div className='h-20'>
                <Navbar />
            </div>
            <div className='min-h-[calc(100vh-80px)]'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Root;