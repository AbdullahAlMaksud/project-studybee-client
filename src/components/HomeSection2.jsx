
const HomeSection2 = ({ services }) => {
    console.log(services)


    return (
        <div className='container mx-auto w-11/12 mb-10'>
            <h2 className="pb-10 text-center text-3xl font-bold text-blue-950 dark:text-blue-50"> Extra Section 2</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.slice(0, 6).map(service => <div key={service._id} className='border-b-4 shadow-lg'>
                        <div className='shadow-blue-800 border-b-8  border-blue-500 bg-blue-100 px-6 pt-6 rounded-sm'>
                            <img className='object-cover w-full h-36 rounded-sm border-white border-4 border-b-0' src={service.imgURL} alt="" />
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-center py-6'>{service.serviceName}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeSection2;