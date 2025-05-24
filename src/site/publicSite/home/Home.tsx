import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import useThemeStore from '@context/themeContext';
import { Bounce, toast } from 'react-toastify';
import './home.module.css';
import Services from './sections/services/Services';
import Products from './sections/products/Products';
import Locations from './sections/locations/Locations';


import SlideOne from "@assets/img/front-1.png";
import SlideTwo from "@assets/img/front-2.png";
import SlideThree from "@assets/img/front-3.png";
import LogoDark from "@assets/img/logo-dark.png";
import LogoLight from "@assets/img/logo-light.png";
import ChainImg from "@assets/img/chair-2.jpg";
import SccissorsImg from "@assets/img/sccissors-2.jpg";
import Gallery from './sections/gallery/Gallery';
import { initIntersectionHeader } from '@utils/initOptions';
import { useEffect } from 'react';

const imgsSlides = [
    { imgUrl: SlideOne, name: 'Slide 1' },
    { imgUrl: SlideTwo, name: 'Slide 2' },
    { imgUrl: SlideThree, name: 'Slide 3' },
]


const Home = () => {

    const theme = useThemeStore(store => store.theme);

    useEffect(() => {
        initIntersectionHeader();
    }, []);

    return (
        <>
            <section className="relative">
                <div className="swiper-banner-container">
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            imgsSlides.map((img, index) => (
                                <SwiperSlide key={`${img.name}-${index}`}>
                                    <img src={img.imgUrl} alt={img.name} className="" />

                                </SwiperSlide>)
                            )
                        }
                    </Swiper>
                </div>
            </section>

            <section className='b-bg-cream py-3 slogan-container' id='sloganSection'>
                <div className='b-container-80 mx-auto flex md:gap-3 flex-col md:flex-row items-center md:items-start md:justify-center'>
                    {/* <p className='b-text-cream  font-bold text-start'>Clásico de origen. Moderno por evolución...</p> */}
                    <div className=' h-[100px]  w-[200px] my-4  bg-indigo-500 overflow-hidden rounded-md '>
                        <img src={theme == 'light' ? LogoDark : LogoLight} alt={'imagen logotipo'} />
                    </div>
                    {/* <p className='b-text-cream font-bold md:self-end text-end'>Donde el pasado y el estilo se encuentran...</p> */}
                </div>
            </section>

            <section className="b-bg-iron w-full">
                <div className='md:flex h-[300px] '>
                    <div className="border-about h-[100px] md:h-[100%] md:w-[50%] w-[100%] overflow-hidden">
                        <img src={ChainImg} alt="imagen de silla de barbería" className='  object-cover' />
                    </div>
                    <div className='md:w-[80%] border-about h-[200px] md:h-[300px] px-5 md:w-[50%] w-[100%] flex items-center justify-center '>
                        <p className='b-font-size-24 b-text-cream font-bold text-center'>Clásico de origen. Moderno por evolución...</p>
                    </div>
                </div>
                <div className='md:flex h-[300px] '>
                    <div className='md:w-[80%]  border-about h-[200px] md:h-[300px] px-5 md:w-[50%] w-[100%] flex items-center justify-center '>
                        <p className='b-font-size-24 b-text-cream font-bold text-center'>Donde el pasado y el estilos se encuentran...</p>
                    </div>
                    <div className="border-about h-[100px] md:h-[100%] md:w-[50%] w-[100%] overflow-hidden">
                        <img src={SccissorsImg} alt="imagen de silla de barbería" className='  object-cover' />
                    </div>
                </div>
            </section>

            <section id='servicesSection' className='b-bg-dark-full'>
                <div className='b-container-85 py-[60px]'>

                    <div className=' mx-auto '>
                        <h2 className='sections-title b-text-cream pt-[30px]'>Servicios</h2>
                    </div>
                    <Services />
                </div>
            </section>

            <section className='b-bg-iron'>
                <div className='b-container-95 py-[60px]'>

                    <div className=' mx-auto'>
                        <h2 className='sections-title b-text-cream pt-[30px]'>Sucursales</h2>
                    </div>
                    <Locations />
                </div>

            </section>

            <section className='b-bg-white'>
                <div className='b-container-95 py-[60px]'>

                    <div className=' mx-auto'>
                        <h2 className='sections-title b-text-steel pt-[30px]'>Nuestros productos</h2>
                    </div>
                    <Products />
                </div>

            </section>

            <section className='b-bg-iron'>
                <div className='b-container-95 py-[60px]'>

                    <div className=' mx-auto'>
                        <h2 className='sections-title b-text-light pt-[30px]'>Galería</h2>
                    </div>
                    <Gallery />
                </div>

            </section>

            <footer className='h-[200px] b-bg-steel flex items-center justify-center'>
                <div className='flex items-center justify-center'>
                    <div className=' h-[150px]  w-[400px]'>
                        <img src={theme == 'light' ? LogoDark : LogoLight} alt={'imagen logotipo'} />
                    </div>
                </div>

            </footer>
            <div className='b-bg-dark-full'>
                <p className=' text-center b-text-light b-font-weight-700 '>Carlos Trinidad - 2025</p>
            </div>


            {/* <button
                onClick={() => {
                    toast.success('🦄 Wow so easy!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                }}
            >toast</button> */}
        </>
    )
}

export default Home;