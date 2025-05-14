import { useState, useEffect } from "react";
 import { getAllServices } from "../../../../services/servicesBarberShop";


const Services = () => {


    const [services, setServices] = useState();

    const getServices = async () => {
        const response = await getAllServices();
        console.log(response)
    }

    useEffect(() => {
        getServices()
    }, []);

    return (
        <>
            <div className="md:flex gap-10 md:justify-evenly md:flex-wrap mt-[70px]" >
             
                <div className="relative flex flex-col rounded-xl b-bg-steel w-[100%]  lg:w-[47%] lg:max-w-[800px] mt-[50px] md:mt-3">
                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl b-bg-gray  text-white shadow-lg  flex items-center justify-center">
                    tesxto
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Tailwind card
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Read More
                        </button>
                    </div>
                </div>
               
                
               
            </div>
        </>
    )
}

export default Services;