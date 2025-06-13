
import contactImage from "../images/contact.webp";


import { TiSocialFacebook } from "react-icons/ti";

import { RxInstagramLogo } from "react-icons/rx";

import { IoLogoTiktok } from "react-icons/io5";

import { TbBrandSnapchatFilled } from "react-icons/tb";

import { ImVimeo } from "react-icons/im";


export default function Contact() {
    return (
        <div className="container-width py-12 flex flex-col gap-40">
            <div>
                <h2 className="text-[#232323] font-semibold text-3xl mb-8 text-center">Contact</h2>
                <div className="flex lg:items-center lg:justify-center gap-20 flex-col lg:flex-row ">
                    <div className="contact-img relative">
                        <img src={contactImage} className="w-full" alt="" />
                        <div className=" absolute border-4 border-[#c8c8c8] top-5 left-5 w-full h-full -z-50 contact-img-border transition-colors duration-500"></div>
                    </div>
                    <div className="flex flex-col items-start gap-10 md:ms-10 lg:ms-0">
                        <div>

                        <h3 className="text-2xl md:text-4xl text-[#232323] font-semibold mb-2.5">GET IN TOUCH</h3>
                        <p className="text-[#666666]">We'd Love to Hear From You, Lets Get In Touch!</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-30 lg:gap-9 xl:gap-20">
                            <div>
                                <h6 className="text-[#232323] font-bold mb-2.5">Address</h6>
                                <p className="text-[#787878] font-medium">Silver business point <br/> India</p>
                            </div>

                            <div>
                                <h6 className="text-[#232323] font-bold mb-2.5">Phone</h6>
                                <p className="text-[#787878] font-medium">9033697984</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-0">
                            <div>
                                <h6 className="text-[#232323] font-bold mb-2.5">Email</h6>
                                <p className=" text-[#787878] font-medium">info@gmail.com</p>
                            </div>

                            <div>
                                <h6 className="text-[#232323] font-bold mb-2.5">Additional Information</h6>
                                <p className="text-[#787878] font-medium leading-6">We are open: Monday - <br />  Saturday, 10AM - 5PM and <br /> closed on sunday sorry for that.</p>
                            </div>
                        </div>

                        <div>
                            <h6 className="text-[#232323] font-bold mb-5">Social</h6>
                            <div className="flex items-center gap-5 text-[#787878] text-lg">

                                <div className="flex items-center justify-center border-2 border-[#dddddd] rounded-full h-8 w-8 hover:text-[#fff374] hover:border-3 hover:border-[#fff374] transition-colors duration-300">
                                    <TiSocialFacebook />
                                </div>

                                <div className="flex items-center justify-center border-2 border-[#dddddd] rounded-full h-8 w-8 hover:text-[#fff374] hover:border-3 hover:border-[#fff374] transition-colors duration-300">
                                    <RxInstagramLogo />
                                </div>

                                <div className="flex items-center justify-center border-2 border-[#dddddd] rounded-full h-8 w-8 hover:text-[#fff374] hover:border-3 hover:border-[#fff374] transition-colors duration-300">
                                    <IoLogoTiktok />
                                </div>

                                <div className="flex items-center justify-center border-2 border-[#dddddd] rounded-full h-8 w-8 hover:text-[#fff374] hover:border-3 hover:border-[#fff374] transition-colors duration-300">
                                    <TbBrandSnapchatFilled />
                                </div>

                                <div className="flex items-center justify-center border-2 border-[#dddddd] rounded-full h-8 w-8 hover:text-[#fff374] hover:border-3 hover:border-[#fff374] transition-colors duration-300">
                                    <ImVimeo />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:px-20 xl:px-30">
                <h3 className="text-2xl md:text-4xl text-[#232323] font-semibold text-center mb-2.5">LEAVE US A MESSAGE</h3>
                <p className="text-[#666666] font-medium mb-10 text-center">-Good For Nature, Good For You-</p>
                <form>
                    <div className="flex items-center justify-between gap-5 mb-5 flex-col md:flex-row">
                        <input className="w-full border-2  border-[#efefef] bg-transparent text-[#666666] p-3 rounded font-bold" type="text" class="form-control" placeholder="Your Name" name="name" />
                        <input className="w-full border-2  border-[#efefef] bg-transparent text-[#666666] p-3 rounded font-bold" type="email" class="form-control" placeholder="Enter Email" name="email" />
                        <input className="w-full border-2  border-[#efefef] bg-transparent text-[#666666] p-3 rounded font-bold" type="text" class="form-control" placeholder="Phone Number" name="number" />
                    </div>
                    <textarea className="w-full border-2 mb-10 border-[#efefef] bg-transparent text-[#666666] p-3 rounded font-bold" class="form-control" rows="5" id="comment" name="text"></textarea>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="py-3 px-15 bg-[#ffef97] rounded-lg text-[#232323] hover:text-white hover:bg-black transition-colors duration-300 font-medium text-lg">Send</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
