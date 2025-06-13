

import mImage1 from "../images/main1.avif"
import mImage2 from "../images/main2.avif"



import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { SwiperSlide, Swiper, } from "swiper/react"
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from "react"

import { sdetails, swiperItems } from "../Utilities/productsCollection";



export default function Maincontent() {
    const S = useRef(null)
    return (
        <div className="container-width grid grid-cols-1 lg:grid-cols-[.5fr_1.5fr] gap-5 py-12">
            <div className="py-10 px-9 bg-[#ffef97] text-center w-full lg:w-110">
                <Swiper

                    navigation={false}
                    modules={[Autoplay, Navigation]}
                    onSwiper={(swiper) => S.current = swiper}
                >

                    {
                        swiperItems.map((sItem) => (
                            <SwiperSlide key={sItem.title}>
                                <h2 className="text-2xl font-bold text-[#232323] mb-5">Our Testimonials</h2>
                                <img className="mx-auto mb-4" src={sItem.image} alt="testimonialImage" />
                                <h6 className="text-sm font-semibold mb-1 italic">{sItem.post}</h6>
                                <h3 className="text-lg font-bold mb-2 text-[#232323]">{sItem.title}</h3>
                                <p className="text-md font-normal text-[#787878] ">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing eiusmod tempor incididunt.</p>
                            </SwiperSlide>
                        ))
                    }

                    <div className="flex items-center justify-center gap-2.5 text-3xl mt-5">
                        <button onClick={() => S.current?.slidePrev()} className="flex items-center justify-center h-12 w-12 bg-white rounded-full hover:bg-[#232323] hover:text-white transition-colors">
                            <MdKeyboardArrowLeft />
                        </button>
                        <button onClick={() => S.current?.slideNext()} className="flex items-center justify-center h-12 w-12 bg-white rounded-full hover:bg-[#232323] hover:text-white transition-colors">
                            <MdKeyboardArrowRight />
                        </button>
                    </div>

                </Swiper>



            </div>

            <div className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-wrap">
                    <img className="w-full" src={mImage1} alt="mainimage" />
                    <img className="w-full" src={mImage2} alt="mainimage" />
                </div>


                <div className="bg-[#c6eff3] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 items-center xl:grid-cols-4">

                    {
                        sdetails.map((item) => (
                            <div key={item.title} className="text-center p-5 xl:py-8 lg:px-10">
                                <a href="#">
                                    <img className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white border-0 mb-2.5"
                                        src={item.image} alt="siconimage"
                                    />
                                    <h5 className="text-sm font-semibold text-[#232323] mb-1">{item.title}</h5>
                                    <p className="text-sm font-normal text-[#787878]">{item.details}</p>
                                </a>
                            </div>

                        ))
                    }

                </div>
            </div>


        </div>
    )
}
