import ServicesCard from "../Shared/ServicesCard";

const HomePopularServices = ({ services }) => {
    return (
        <div className='container mx-auto w-11/12 mb-10'>
            <h2 className="pb-10 text-center text-3xl font-bold text-blue-950 dark:text-blue-50 -rotate-2 bg-[]"> Popular Servicces</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.slice(0, 6).map(service => <ServicesCard key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default HomePopularServices;