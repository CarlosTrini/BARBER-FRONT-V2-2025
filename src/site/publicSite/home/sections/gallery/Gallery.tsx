import { GalleryI } from "typesSystem/typesSystem";
import { useEffect, useState } from "react";
import { getAllProdcts } from "@services/publicSite/servicesBarberShop";
import { Swiper, SwiperSlide } from "swiper/react";
import css from '../../home.module.css'

import { Link } from "react-router";
import { Modal } from "antd";

const FAKE_GALLERY = [
    {
        id: '1234-1234-1234-1234',
        img: '/src/assets/img/person-2.jpg',
    },
    {
        id: '4321-4312-4312-4312',
        img: '/src/assets/img/barber-lamp.jpg',
    },
    {
        id: 'lñkasjdf-ñlaskjdf-ñlaksjdf',
        img: '/src/assets/img/chair.jpg'
    },
    {
        id: '1234-1234-1234-1234',
        img: '/src/assets/img/person-2.jpg',
    },
    {
        id: '4321-4312-4312-4312',
        img: '/src/assets/img/barber-lamp.jpg',
    },
    {
        id: 'lñkasjdf-ñlaskjdf-ñlaksjdf',
        img: '/src/assets/img/chair.jpg'
    }, {
        id: 'lñkasjdf-ñlaskjdf-ñlaksjdf',
        img: '/src/assets/img/chair.jpg'
    },
    {
        id: '1234-1234-1234-1234',
        img: '/src/assets/img/person-2.jpg',
    }
]

const Gallery = () => {

    const [productStore, setProductsStore] = useState<GalleryI[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [imageSelected, setImageSelected] = useState<number>(0)


    const handleShowModal = (indexImg: number = 0) => {
        setImageSelected(indexImg);
        setShowModal(!showModal)
    }

    const getProducts = async () => {
        // const response = await getAllLocations();
        // console.log(response);
        setProductsStore(FAKE_GALLERY as GalleryI[])
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div>
                <div className="flex items-center">

                    <p className="w-[70px] h-[70px] b-bg-dark-full rounded-full flex items-center justify-center">
                        <i className="fa-brands fa-instagram b-font-size-36 b-text-light "></i>
                    </p>
                    <p className="mt-[20px] ms-[10px] b-font-size-20 b-text-light">
                        <Link to='https://instagram.com' target="_blank">
                            BarberShop React-TS
                        </Link>
                    </p>
                </div>
                <div className="flex flex-wrap flex-row lg:justify-evenly  mt-[40px]">
                    {
                        productStore?.map((product, i) => (
                            <div className="w-[48%] md:w-[33%] lg:w-[24.5%]  mb-[10px] rounded mx-auto  border-[2px] border-[var(--color-light)] cursor-pointer" key={product.id} >
                                <div className="w-full mx-auto  h-[280px]" onClick={() => handleShowModal(i)}>
                                    <img src={product.img} alt="" className="object-cover" />
                                </div>
                            </div>
                        ))
                    }





                </div>

            </div>

            <Modal
                closable={false}
                onCancel={() => handleShowModal()}
                onClose={() => handleShowModal()}
                destroyOnClose={true}
                open={showModal}
                footer={false}
                centered
                className={css['gallery-modal']}
            >
                <div className="h-[450px] md:h-[500px] lg:h-[600px] ">

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1.05}
                        initialSlide={imageSelected} // Muestra el slide número 5
                    >
                        {FAKE_GALLERY.map((gallery, i) => (
                            <SwiperSlide key={i} className="border-y-[10px] border-[var(--color-steel)]">
                                <img src={`${gallery.img}`} alt={`Slide ${i + 1}`} className="rounded-md   py-[3px] cursor-grab" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Modal >

        </>
    );
}

export default Gallery;