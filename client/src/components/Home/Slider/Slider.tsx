import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import first from "../../../../public/Sliders/1.png";
import second from "../../../../public/Sliders/2.jpg";
import third from "../../../../public/Sliders/1.png";



import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles
import 'swiper/css';


interface SliderIF {
  title: string;
  src: StaticImageData;
}

const Slider = () => {
  const [data] = useState<SliderIF[]>([
    { title: "First Image", src: first },
    { title: "Second Image", src: second },
    { title: "Third Image", src: third },
    { title: "First Image", src: first },
    { title: "Second Image", src: second },
    { title: "Third Image", src: third }
  ]);

  return (
    <div className="w-full snap-proximity h-[60vh] md:h-[85vh] flex justify-center items-center">
      <div className="w-full h-full overflow-x-scroll flex snap-x " 
      >


      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }} // Slide change every 3 seconds
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
       >
      
       {data.map((item, index) => (
          <div key={index}>
            <SwiperSlide>
            <Image
              src={item.src}
              alt={item.title}
              width={0}
              height={0}
              className="h-full object-cover"
            />
            </SwiperSlide>
          </div>
        ))}
    </Swiper>

       
      </div>
    </div>
  );
};

export default Slider;
