import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;