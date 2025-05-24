import { LocationI } from "typesSystem/typesSystem";
import { useEffect, useState } from "react";
import { getAllLocations } from "@services/publicSite/servicesBarberShop";
import Button from "@components/button/Button";
import { Link } from "react-router";

const FAKE_LOCATIONS = [
    {
        id: '1234-1234-1234-2344',
        img: '/src/assets/img/barber-front.jpg',
        city: 'CDMX',
        NeighborhoodName: 'POLANCO',
        address: 'B. Alejandro Dumas 84, Polanco IV Section, 11550, Mexico City, CDMX',
        route: '/branches/polanco'
    },
    {
        id: '1234-1234-1234-6f5t',
        img: '/src/assets/img/barber-front.jpg',
        city: 'CDMX',
        NeighborhoodName: 'CONDESA',
        address: 'B. Alejandro Dumas 84, Polanco IV Section, 11550, Mexico City, CDMX',
        route: '/branches/condesa'
    },
    {
        id: '1234-1234-1234-dkljfas',
        img: '/src/assets/img/barber-front.jpg',
        city: 'CDMX',
        NeighborhoodName: 'CANCÚN',
        address: 'B. Alejandro Dumas 84, Polanco IV Section, 11550, Mexico City, CDMX',
        route: '/branches/cancun'
    },
    {
        id: '1234-1234-1234-1234-ñlaksdjf',
        img: '/src/assets/img/barber-front.jpg',
        city: 'CDMX',
        NeighborhoodName: 'LA ROMA',
        address: 'B. Alejandro Dumas 84, Polanco IV Section, 11550, Mexico City, CDMX',
        route: '/branches/la_roma'
    }
]

const Locations = () => {

    const [locations, setLocations] = useState<LocationI[]>([]);

    const handleShowModal = () => {
        console.log('HOLA')
    }

    const getLocations = async () => {
        // const response = await getAllLocations();
        // console.log(response);
        setLocations(FAKE_LOCATIONS as LocationI[])
    }

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <>
            <div className="">

                <div className="flex flex-col md:flex-wrap md:flex-row lg:justify-evenly my-[60px]">
                    {
                        locations?.map(location => (
                            <div className="w-[90%] md:w-[48%] xl:w-[23.5%] mx-auto border-y-[20px] border-[var(--color-orange)] mb-5  pb-3" key={location.id}>
                                <div className="w-full  h-[390px]">
                                    <img src={location.img} alt="" className='rounded-b-xl' />
                                </div>
                                <div className="text-center flex flex-col gap-3 mt-[10px] b-text-cream">

                                    <p className="b-font-weight-700 b-font-size-28">{location.NeighborhoodName}</p>
                                    <p className="b-font-weight-700 b-font-size-20">{location.city}</p>
                                    <p className="b-font-weight-700 b-font-size-26">
                                        <i className="fa-solid fa-map-location-dot"></i>
                                    </p>
                                    <p className="b-font-weight-700 b-font-size-16">{location.address}</p>
                                </div>
                                <div className="text-center mt-[20px]">
                                    <Button className="b-button b-button-color-orange b-text-light b-font-size-20" onClick={handleShowModal} >Agenda tu cita <i className="fa-solid fa-handshake ms-2"></i></Button>
                                </div>
                            </div>
                        ))
                    }





                </div>

                <div className="text-end">
                    <Link to={'/branches'} className="b-button b-button-color-orange b-text-light b-font-size-18 b-font-weight-700" >
                        Ver más sucursales <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                </div>

            </div>
        </>
    );
}

export default Locations;