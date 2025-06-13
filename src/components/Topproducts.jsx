


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import { categoryItems } from '../Utilities/productsCollection';







export default function Topproducts() {
    return (
        <div className="container-width overflow-hidden  -mt-20">
            <div className="grid grid-cols-1 xl:grid-cols-[.5fr_1.5fr] items-center p-4 top-product-shadow bg-white max-w-9xl border-b border-[#eeeeee]">
                <div className="relative">
                    <div className=" absolute w-0.5 h-48 bg-[#eeeeee] right-0 top-0 -translate-y-16"></div>
                    <h2 className="text-center px-8 text-2xl text-[#232323] font-medium">Top Products</h2>
                </div>

                <div className="w-full xl:w-286">
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            530: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                        }}
                        className="w-full"
                    >
                        {
                            categoryItems.map((items,i) => (
                                <SwiperSlide key={i} >
                                    <div className="flex flex-col items-center justify-center pt-2 pb-12">
                                        <a href="#">
                                            <img width={70} className="object-contain" src={items.image} alt="categoryImage" />
                                        </a>
                                        <h4 className="font-semibold text-[#555555]">{items.title}</h4>
                                    </div>
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
