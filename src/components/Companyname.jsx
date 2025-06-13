
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

import { images } from '../Utilities/productsCollection';




export default function Companyname() {
    return (
        <div className="container-width py-12">
            <div className="w-full max-w-8xl mx-auto">
                <Swiper
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        530: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {  
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}
                    className="w-full"
                >

                    {images.map((item,i) => (
                        <SwiperSlide key={i} >
                            <div className="flex items-center justify-center">
                                <img className="object-contain" src={item} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}
