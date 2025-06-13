import { BiSolidMessageRounded } from "react-icons/bi";

import { SwiperSlide, Swiper } from "swiper/react"
import { useRef } from "react"
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


import { Link } from "react-router";

import { blog } from "../Utilities/productsCollection";




export default function Blog() {
    const S = useRef(null)

    return (
        <div className="container-width py-12">
            <h2 className="text-center text-2xl font-semibold mb-7">Our Latest Blog</h2>

            <Swiper


                modules={[Navigation]}

                onSwiper={(swiper) => S.current = swiper}
                breakpoints={{
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    550: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}
                className="w-full"

            >

                {
                    blog.map((item,i) => (
                        <SwiperSlide key={i}>

                            <div className="border-1 border-[#eee] p-2.5 rounded-md">
                                <div className="relative">
                                    <a href="#">
                                        <img className="w-full" src={item.image} alt="" />
                                    </a>
                                    <span className="absolute top-2.5 left-2.5 p-2 bg-[#ffef97] text-[#232323] text-center font-semibold">29<br /> August</span>
                                </div>
                                <div className="py-2.5 pe-4 mt-1.5">
                                    <h4 className="text-[#232323] text-lg font-semibold mb-1.5">{item.title}</h4>
                                    <p className="text-[#787878] text-sm font-normal mb-4">Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light, creeping there sa...</p>
                                    <div className="flex items-center justify-between">
                                        <Link to={`/comments`}>
                                            <button className="py-2.5 px-5 bg-[#ffef97] text-[#232323] uppercase text-sm font-semibold hover:bg-[#232323] hover:text-white">
                                                Read More
                                            </button>
                                        </Link>
                                        <Link to={`/comments`}>
                                            <button className="p-2 bg-[#ffffff] shadow text-[#666666] text-sm font-semibold flex items-center gap-1">
                                                <span className="mt-1"><BiSolidMessageRounded /></span><span className="font-medium">0 Comments</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))
                }

                <div className="flex items-center justify-center gap-2.5 text-3xl mt-5">
                    <button onClick={() => S.current?.slidePrev()} className="flex items-center justify-center h-9 w-9 bg-[#ffef97] rounded-full text-2xl hover:bg-[#232323] hover:text-white transition-colors">
                        <MdKeyboardArrowLeft />
                    </button>
                    <button onClick={() => S.current?.slideNext()} className="flex items-center justify-center h-9 w-9 bg-[#ffef97] rounded-full text-2xl hover:bg-[#232323] hover:text-white transition-colors">
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </Swiper>


        </div>
    )
}
