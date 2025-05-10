import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


import "./auth.css";
import Login from "./login/Login";
import Register from "./register/Register";
import { Button } from "antd";
import { Link } from "react-router";

const Auth = () => {
  const pagination = {
    clickable: true,
    bulletActiveClass: "active-bullet",
    bulletClass: "bullets",
    renderBullet: function (index: number, className: string) {
      const slideOptions = [
        '<span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-icon lucide-circle-user b-stroke-orange"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg> </span>  <p class="ms-2 mb-0">Iniciar Sesión</p>',

        '<span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-pen-icon lucide-notebook-pen b-stroke-orange"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg> </span>  <p class="ms-2 mb-0">Registrase</p>',
      ];

      return `<button class="${className}">  ${slideOptions[index]}</button>`;
    },
  };

  const [currentSwiper, setCurrentSwiper] = useState<'login' | 'register'>('login');

  return (
    <>
      <section className="auth-container">
          <div className="back-home">
            <Button  ghost size="small" color="default" shape="round" className="border-none ">
              <Link to="/">
                <i className="fas fa-house me-2" ></i>
                <span className="">Home</span>
              </Link>
              
            </Button>
          </div>
        <div className="auth-swiper-container">
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
            spaceBetween={50}
            onSlideChange={(swiper) => {
              setCurrentSwiper(swiper.activeIndex === 0 ? 'login' : 'register');
            }}
          >
            <SwiperSlide className="">
              <Login currentSwiper={currentSwiper} />
            </SwiperSlide>
            <SwiperSlide>
              <Register currentSwiper={currentSwiper} />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Auth;
