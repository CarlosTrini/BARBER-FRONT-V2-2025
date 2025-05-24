import { useState, useEffect } from "react";
import { getAllServices } from "@services/publicSite/servicesBarberShop";
import { ServiceI } from "@typesSystem/typesSystem";
import Button from "@components/button/Button";
import { Link } from "react-router";

const FAKE_SERVICES = [
    {
         id: '1234-1234-1234-hxfae',
        "packageName": "Paquetes",
        "services": [
            {
                "name": "SCALPER GROOMING",
                "description": "Corte de cabello + afeitado o recorte de barba",
                "price": '595'
            },
            {
                "name": "SCALPER SPA",
                "description": "Manicure + pedicure",
                "price": '450'
            },
            {
                "name": "SCALPER MAN",
                "description": "Corte de cabello + arreglo de barba + facial",
                "price": '800'
            }
        ]
    },
    {
         id: '1234-asdfer-asdfad-1234',
        "packageName": "Grooming",
        "services": [
            {
                "name": "CORTE DE CABELLO",
                "description": "",
                "price": '380'
            },
            {
                "name": "CORTE DE NIÑO",
                "description": "",
                "price": '320'
            },
            {
                "name": "GRECA SENCILLA",
                "description": "",
                "price": '500'
            },
            {
                "name": "LIMPIEZA DE CONTORNO",
                "description": "",
                "price": '180'
            },
            {
                "name": "AFEITADO DE CABEZA",
                "description": "",
                "price": '380'
            }
        ]
    },
    {
         id: '1234-qqqq-1234-aaqqq',
        "packageName": "SPA",
        "services": [
            {
                "name": "MANICURE",
                "description": "",
                "price": '200'
            },
            {
                "name": "PEDICURE",
                "description": "",
                "price": '330'
            },
            {
                "name": "LIMPIEZA FACIAL",
                "description": "Tratamiento exfoliante humectante en el rostro",
                "price": '250'
            },
            {
                "name": "DEPILACIÓN",
                "description": "Ceja, nariz y oído",
                "price": '180'
            },
            {
                "name": "MASAJE ANTI - ESTRÉS",
                "description": "Masaje derma calmante con guante Oster",
                "price": '150'
            }
        ]
    },
    {
         id: '1234-1234-lkjaer-1234',
        "packageName": "Barba",
        "services": [
            {
                "name": "RECORTE ALINEADO DE BARBA O BIGOTE",
                "description": "Preshave, espuma caliente, toalla fría y caliente, aromaterapia, aftershave y masaje dermo calmante",
                "price": '340'
            },
            {
                "name": "AFEITADO DE BARBA",
                "description": "Preshave, espuma caliente, pasada de navaja, toalla fría y caliente, aromaterapia, aftershave y masaje dermo calmante",
                "price": '340'
            },
            {
                "name": "COLORACIÓN",
                "description": "Coloración de barba o bigote",
                "price": '300'
            }
        ]
    }
]

const Services = () => {


    const [services, setServices] = useState<ServiceI[]>();

    const getServices = async () => {
        // const response = await getAllServices();
        // console.log(response)
        setServices(FAKE_SERVICES as ServiceI[]);
    }

    useEffect(() => {
        getServices()
    }, []);

    return (
        <>
            <div className="md:flex gap-10 md:justify-evenly md:flex-wrap mt-[70px] pb-[40px]" >

                {
                    services?.map((service) => {
                        return (
                            <div className="relative flex flex-col rounded-xl b-bg-steel pb-[30px] w-[100%]  lg:w-[47%] lg:max-w-[800px] mt-[50px] md:mt-3" key={service.packageName}>
                                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl b-bg-gray  b-text-dark-full shadow-lg  flex items-center justify-center">
                                    <h2 className="b-font-size-38 b-font-weight-800 b-font-style-italic"> {service.packageName} </h2>
                                </div>
                                <ul>

                                    {
                                        service?.services?.map((info) => (
                                            <>
                                                <li className="w-[90%] mx-auto shadow-xl">
                                                    <div className="p-5">
                                                        <h5 className="mb-2 block b-font-size-18 b-font-weight-600 b-font-style-italic b-text-dark leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                            <i className="fa-solid fa-circle-dot b-font-size-14"></i> {info.name}
                                                        </h5>
                                                        {
                                                            info.description !== '' && (
                                                                <p className="block b-font-weight-200 ps-3 b-text-dark">
                                                                    - {info.description}
                                                                </p>

                                                            )
                                                        }
                                                        <p className="text-end b-font-size-18 b-font-weight-700 ps-3 b-text-dark">
                                                            $ {info.price}
                                                        </p>
                                                    </div>

                                                </li>
                                            </>

                                        ))
                                    }
                                </ul>


                            </div>
                        )
                    }
                    )
                }

                <div className="b-font-size-26 flex flex-col md:flex-row  items-center justify-center gap-5 mt-[40px]">
                    <div>
                        <p className="mb-0 b-text-cream "> <i className="fas fa-phone me-2"></i>  55-55-55-55-55</p>
                        <p className="mb-0 b-text-cream "> <i className="fa-brands fa-whatsapp me-2"></i>  55-55-55-55-55</p>
                    </div>
                    <div>
                        <Link to="/book-appointment">
                            <Button className="b-button b-button-color-gold b-font-size-20 b-text-dark b-font-weight-700 b-font-style-italic" >Agenda tu cita!!  <i className="fa-solid fa-handshake ms-2"></i></Button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services;
