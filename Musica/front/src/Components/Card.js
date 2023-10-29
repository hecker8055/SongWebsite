import React from 'react'
import Card from './Card.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import 'swiper/css';
import { Navigation, Pagination,Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "./Images/Slider-2/1.webp"
import img2 from "./Images/Slider-2/2.webp"
import img3 from "./Images/Slider-2/3.webp"
import img4 from "./Images/Slider-2/4.webp"
import img5 from "./Images/Slider-2/5.webp"
import img6 from "./Images/Slider-2/6.webp"
import img7 from "./Images/Slider-2/7.webp"
import img8 from "./Images/Slider-2/8.webp"
import img9 from "./Images/Slider-2/9.webp"
import img10 from "./Images/Slider-2/10.webp"
import img11 from "./Images/Slider-2/11.webp"
import img12 from "./Images/Slider-2/12.webp"
import img13 from "./Images/Slider-2/13.webp"
import img14 from "./Images/Slider-2/14.webp"
import img15 from "./Images/Slider-2/15.webp"
import img16 from "./Images/Slider-2/16.webp"
import img17 from "./Images/Slider-2/17.webp"
import img18 from "./Images/Slider-2/18.webp"

const Card1 = () => {
  return (
    <>
       <div className="new-release mt-9">
      <h1 className="text-white  uppercase mb-3 text-2xl font-medium">New releases</h1>
      <div className="slider-2">
         <Swiper
            spaceBetween={20}
            slidesPerView={6}
            cssMode={true}
            sticky={false}
            freeMode={{ enable: true }}
            mousewheel={{
              mousewheel:true
            }}
            navigation={true}
            breakpoints={{
               0: {
                 slidesPerView: 3,
                 
               },
               640: {
                 slidesPerView: 6,
               },
             }}
            modules={[Pagination, Navigation,Mousewheel]}
            className="mySwiper"
           >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img13} alt="" /></SwiperSlide>     
            <SwiperSlide><img src={img14} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img15} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img16} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img17} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img18} alt="" /></SwiperSlide>  
         </Swiper>
      </div>
    </div>
    </>
  )
}

export default Card1