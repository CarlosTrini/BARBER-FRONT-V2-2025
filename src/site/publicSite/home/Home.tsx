import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SlideOne from "../../../assets/img/front-1.png";
import SlideTwo from "../../../assets/img/front-2.png";
import SlideThree from "../../../assets/img/front-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import './home.css';

const imgsSlides = [
    { imgUrl: SlideOne, name: 'Slide 1' },
    { imgUrl: SlideTwo, name: 'Slide 2' },
    { imgUrl: SlideThree, name: 'Slide 3' },
]


const Home = () => {

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
        </>
    )
}

export default Home;