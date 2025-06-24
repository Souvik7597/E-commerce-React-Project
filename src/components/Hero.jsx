import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Swipercard from './Swipercard';

import { useRef } from 'react';

import { bannerItems } from '../Utilities/productsCollection';



export default function Hero() {
    const S = useRef(null)


    return (
        <div className='mb-25 mt-10 relative'>
            <Swiper
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Navigation, Pagination]}
                onSwiper={(swiper) => S.current = swiper}

            >

                {
                    bannerItems.map((s) => (
                        <SwiperSlide key={s.id} className='pb-5'>
                            <Swipercard info={s} />
                        </SwiperSlide>
                    ))
                }

                <div className="flex items-center justify-between gap-2.5 text-3xl mt-5">
                    <button onClick={() => S.current?.slidePrev()} className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 bg-[#ffef97] absolute rounded-full top-5/12 md:left-10 left-5 z-50 hover:bg-[#232323] hover:text-white transition-colors">
                        <MdKeyboardArrowLeft />
                    </button>
                    <button onClick={() => S.current?.slideNext()} className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 bg-[#ffef97] absolute rounded-full top-5/12 md:right-10 right-5 z-50 hover:bg-[#232323] hover:text-white transition-colors">
                        <MdKeyboardArrowRight />
                    </button>
                </div>

            </Swiper>
        </div>
    )
}
