import HomeBanner from '../components/HomeBanner';
import HomePopularServices from '../components/HomePopularServices';
import HomeSection1 from '../components/HomeSection1';
import HomeSection2 from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <HomeBanner />
            <HomePopularServices />
            <HomeSection1 />
            <HomeSection2 services={services} />
            <HomeSection3 />
        </div>
    );
};

export default Home;