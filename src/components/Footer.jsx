import bgImage from "../images/header-bg.webp"
import lgImage from "../images/logo.webp"
import ftBgImage from "../images/footer-bg.webp"
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaSnapchat } from "react-icons/fa6";
import { FaVimeoV } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

export default function Footer() {
    const bgProps = { backgroundImage: `url(${bgImage})` }
    const ftBgProps = { backgroundImage: `url(${ftBgImage})` }

    return (
        <>
            <div style={bgProps} className="py-7 px-5 sm:px-9 md:px-12 bg-center bg-cover">

                <footer style={ftBgProps} >
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-5 lg:gap-2 xl:gap-5 py-16 px-10 sm:px-15 xl:px-32">
                        <div>
                            <img src={lgImage} alt="siteLogo" />
                            <p className=" my-5 text-base text-[#787878]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <div className="flex gap-1.5">
                                <button>
                                    <a className="flex items-center justify-center text-lg bg-[#3b5999] h-8 w-8 rounded-full text-white" href="#">
                                        <MdOutlineFacebook />
                                    </a>
                                </button>

                                <button><a className="flex items-center justify-center text-lg bg-[#cc2366] h-8 w-8 rounded-full text-white" href="#">
                                    <IoLogoInstagram />
                                </a>
                                </button>

                                <button>
                                    <a className="flex items-center justify-center text-lg bg-[#232323] h-8 w-8 rounded-full text-white" href="#">
                                        <AiOutlineTikTok />
                                    </a>
                                </button>

                                <button>
                                    <a className="flex items-center justify-center text-lg bg-[#3b5999] h-8 w-8 rounded-full text-white" href="#"><FaSnapchat />
                                    </a>
                                </button>

                                <button>
                                    <a className="flex items-center justify-center text-lg bg-[#00aced] h-8 w-8 rounded-full text-white" href="#">
                                        <FaVimeoV />
                                    </a>
                                </button>
                            </div>

                        </div>

                        <div>
                            <h2 className="text-lg text-[#232323] mb-4">Your Account</h2>

                            <ul>
                                <li className="mb-1.5"><a className="text-[#787878] text-sm" href="#">About Us</a></li>
                                <li className="mb-1.5"><a className="text-[#787878] text-sm" href="#">Contact Us</a></li>
                                <li className="mb-1.5"><a className="text-[#787878] text-sm" href="#">FAQs</a></li>
                                <li className="mb-1.5"><a className="text-[#787878] text-sm" href="#">New Products</a></li>
                                <li><a className="text-[#787878] text-sm" href="#">Best Sales</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg text-[#232323] mb-4">Our Company</h2>

                            <ul>
                                <li className="mb-1.5"><a className="text-[#787878] text-sm" href="#">Personal Info</a></li>
                                <li className="mb-1.5"><a className="text-[#787878] text-sm" href="#">Address</a></li>
                                <li className="mb-1.5"><a className="text-[#787878] text-sm" href="#">Orders</a></li>
                                <li className="mb-1.5"><a className="text-[#787878] text-sm" href="#">Credit Slips</a></li>
                                <li><a className="text-[#787878] text-sm" href="#">Wishlist</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg text-[#232323] mb-4">Store Information</h2>

                            <div className="flex gap-2.5 mb-5 items-center">
                                <button className="flex items-center justify-center h-11 w-11 rounded-full text-xl bg-[#ffef97] text-[#232323] hover:bg-black hover:text-white transition-colors duration-300">
                                    <IoLocationSharp />
                                </button>
                                <p className="text-sm text-[#787878]">Silver Buissness Point <br /> India</p>
                            </div>

                            <div className="flex gap-2.5 mb-5 items-center">
                                <button className="flex items-center justify-center h-11 w-11 rounded-full text-xl bg-[#ffef97] text-[#232323] hover:bg-black hover:text-white transition-colors duration-300">
                                    <FaPhoneAlt />
                                </button>
                                <p className="text-sm text-[#787878]">9033697984</p>
                            </div>

                            <div className="flex gap-2.5 items-center">
                                <button className="flex items-center justify-center h-11 w-11 rounded-full text-xl bg-[#ffef97] text-[#232323] hover:bg-black hover:text-white transition-colors duration-300">
                                    <FaRegEnvelope />
                                </button>
                                <p className="text-sm text-[#787878]">info@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
