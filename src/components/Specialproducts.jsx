import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';

import 'swiper/css/navigation';
import { useRef, useState } from "react"

import { Autoplay, Navigation } from 'swiper/modules';



import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


import Productcard from "./Productcard";
import Timer from "./Timer";
import { Link } from "react-router";

import { buttons, products } from "../Utilities/productsCollection";



const featuredProduct = products.slice(0, 3)
const newArrivalsProduct = products.slice(5, 8)
const bestSellersProduct = products.slice(9, 12)
const slider = products.slice(2, 5)



export default function Specialproducts() {

    const S = useRef(null)
    const [toggleTab, setToggleTab] = useState("Featured")



    const mainProduct = toggleTab == "Featured" ? featuredProduct : toggleTab == "New Arrivals" ? newArrivalsProduct : toggleTab == "Best Sellers" ? bestSellersProduct : null

    return (
        <div className="container-width py-12  mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-3">

                <div>
                    <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl text-[#232323] font-semibold">Special Product</h1>
                        </div>
                        <div className="flex gap-4">
                            {
                                buttons.map((btn) => (
                                    <div key={btn.title}>
                                        <button onClick={() => setToggleTab(btn.title)} className={`py-2 px-3  text-[#232323] text-sm ${toggleTab === btn.title ? "bg-[#ffef97]" : "bg-[#f5f5f5]"}`}>
                                            {btn.title}
                                        </button>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className="flex flex-col items-center justify-center gap-15">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">


                            {
                                mainProduct.map((item, i) => (
                                    <div>

                                        <Productcard key={i} item={item} />
                                        
                                    </div>
                                ))
                            }

                        </div>
                        <Link to={`/products`}>
                            <button className="py-2.5 px-5 bg-[#ffef97] text-[#232323] uppercase text-sm font-medium hover:bg-[#232323] hover:text-white transition-colors">View All</button>
                        </Link>

                    </div>
                </div>

                <div className="xl:w-80 ms-3 relative">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl text-[#232323] font-semibold ">Hot Deals</h1>
                        <div className="flex items-center justify-between gap-2.5 text-3xl">
                            <button onClick={() => S.current?.slidePrev()} className="flex items-center justify-center h-9 w-9 bg-[#ffef97] rounded-full text-2xl hover:bg-[#232323] hover:text-white transition-colors">
                                <MdKeyboardArrowLeft />
                            </button>
                            <button onClick={() => S.current?.slideNext()} className="flex items-center justify-center h-9 w-9 bg-[#ffef97] rounded-full text-2xl hover:bg-[#232323] hover:text-white transition-colors">
                                <MdKeyboardArrowRight />
                            </button>
                        </div>
                    </div>
                    <Swiper
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Navigation]}

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
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 1,
                            },
                        }}

                        className="w-full"

                    >
                        {
                            slider.map((sItem, i) => (
                                <SwiperSlide key={i} >
                                    <Productcard item={sItem} >
                                        <Timer />
                                    </Productcard>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>
                </div>

            </div>
        </div>
    )
}


