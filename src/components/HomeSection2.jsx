
const HomeSection2 = ({ services }) => {
    console.log(services)


    return (
        <div className='container mx-auto w-11/12 mb-10'>
            <h2 className="pb-10 text-center text-3xl font-bold text-orange-600"> Extra Section 2</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg'>
                {
                    services.slice(0, 6).map(service => <div key={service._id} className='border-b rounded-xl shadow-lg'>
                        <div className='shadow-xl border-b-8  border-orange-500 bg-orange-100 px-10 pt-10 rounded-tl-3xl'>
                            <img className='object-cover w-full h-40 rounded-tr-3xl' src={service.imgURL} alt="" />
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