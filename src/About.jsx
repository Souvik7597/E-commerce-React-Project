
import aboutImage1 from "./images/about1.webp"
import aboutImage2 from "./images/about2.webp"
import aboutIcon1 from "./images/about-icon.webp"
import aboutIcon2 from "./images/about-icon-2.webp"
import aboutIcon3 from "./images/about-icon-3.png"

import { GoDotFill } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router"

const services = [
    {
        icon: aboutIcon1,
        title: "Free Resources",
        description: "Bring to the table win-win survival strategies to ensure proactive domination."
    },
    {
        icon: aboutIcon2,
        title: "MULTI PURPOSE",
        description: "Bring to the table win-win survival strategies to ensure proactive domination."
    },
    {
        icon: aboutIcon3,
        title: "Fully Responsive",
        description: "Bring to the table win-win survival strategies to ensure proactive domination."
    },
]

export default function About() {
    return (
        <div className="container-width py-12 flex flex-col gap-25">
            <div>
                <h2 className="text-[#232323] font-semibold text-3xl mb-8 text-center">About Us</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 xl:gap-10 lg:justify-center">
                    <img src={aboutImage1} alt="" />
                    <div>
                        <h3 className="text-[#232323] font-semibold text-2xl md:text-3xl mb-5">We Have Everything You Need ?</h3>
                        <p className="text-[#787878] mb-5">Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>

                        <h5 className="font-semibold text-[#232323] mb-4">Sample Unordered List</h5>
                        <ul className="flex flex-col gap-2 mb-8">
                            <li className="flex items-center gap-1 text-[15px] font-normal text-[#787878]"><span className="mt-1 text-sm"><GoDotFill /></span> Lorem ipsum, or lipsum as it is sometimes known</li>

                            <li className="flex items-center gap-1 text-[15px] font-normal text-[#787878]"><span className="mt-1 text-sm"><GoDotFill /></span> Dummy text used in laying out print, graphic or web designs</li>

                            <li className="flex items-center gap-1 text-[15px] font-normal text-[#787878]"><span className="mt-1 text-sm"><GoDotFill /></span> The passage is attributed to.</li>

                            <li className="flex items-center gap-1 text-[15px] font-normal text-[#787878]"><span className="mt-1 text-sm"><GoDotFill /></span> Proin molestie egestas orci ac suscipit risus posuere loremou.</li>

                            <li className="flex items-center gap-1 text-[15px] font-normal text-[#787878]"><span className="mt-1 text-sm"><GoDotFill /></span> Dummy text used in laying out print, graphic or web designs</li>
                        </ul>
                        <Link to="/contact">
                            <button className="bg-[#ffef97] py-2.5 px-5 rounded-lg text-[#232323] flex items-center gap-1.5 hover:bg-black hover:text-white transition-colors duration-300">Contact Us <span><BsArrowRight /></span></button>
                        </Link>
                    </div>
                </div>
            </div>

            <div>

                <h2 className="text-[#232323] font-semibold text-3xl mb-8 text-center">Our Services</h2>
                <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-3">
                    {
                        services.map((item, i) => (
                            <div key={i} className="cursor-pointer">
                                <img className=" m-auto" src={item.icon} alt="" />
                                <h2 className="text-center text-[#232323] font-semibold mb-2.5 text-lg mt-4 hover:text-[#ffef97] transition-colors duration-300">{item.title}</h2>
                                <p className="text-center text-[#787878]">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 xl:gap-10 lg:justify-center">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-[#232323] font-semibold text-2xl md:text-3xl mb-5">We Have Everything You Need ?</h3>
                        <p className="text-[#787878] mb-5">Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>

                        <h5 className="font-semibold text-[#232323] mb-4">Sample Ordered List</h5>
                        <ul className="flex flex-col gap-2 mb-8">
                            <li className="flex items-center gap-1 text-[15px] font-normal text-[#787878]">
                                <span className="text-sm">1.</span> Lorem ipsum, or lipsum as it is sometimes known</li>

                            <li className="flex items-center gap-1 text-[15px] font-normal text-[#787878]">
                                <span className="text-sm">2.</span> Dummy text used in laying out print, graphic or web designs</li>

                            <li className="flex items-center gap-1 text-[15px] font-normal text-[#787878]">
                                <span className="text-sm">3.</span> The passage is attributed to.</li>

                            <li className="flex items-center gap-1 text-[15px] font-normal text-[#787878]">
                                <span className="text-sm">4.</span> Proin molestie egestas orci ac suscipit risus posuere loremou.</li>

                            <li className="flex items-center gap-1 text-[15px] font-normal text-[#787878]">
                                <span className="text-sm">5.</span> Dummy text used in laying out print, graphic or web designs</li>
                        </ul>
                        <Link to="/contact">
                            <button className="bg-[#ffef97] py-2.5 px-5 rounded-lg text-[#232323] flex items-center gap-1.5 hover:bg-black hover:text-white transition-colors duration-300">Contact Us <span><BsArrowRight /></span></button>
                        </Link>
                    </div>
                    <div className="order-1 lg:order-2">
                    <img src={aboutImage2} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
