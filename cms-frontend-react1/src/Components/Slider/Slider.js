import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import './Slider.css'

const Slider = ({images}) => {
  return (
    <Swiper
    id='slider'
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper">
      {images.map((element)=>{
        return <SwiperSlide><img src={element} /></SwiperSlide>
      }) }
    </Swiper>
  )
}

export default Slider
