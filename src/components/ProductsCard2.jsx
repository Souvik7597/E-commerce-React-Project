

import { FaRegEye } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router";

export default function ProductsCard2({ item }) {
    return (
        <Link to={`/products/${item.id}`}>
            <div className="grid grid-cols-1 md:grid-cols-[.5fr_1fr] gap-5 w-full">
                <div className="relative">
                    <img className="h-full w-full" src={item.image} alt="" />

                    <div className="flex items-center justify-center text-xl text-yellow-400 absolute bottom-6 left-1/2 -translate-x-1/2">
                        {item.rating}

                    </div>
                </div>

                <div className="text-center md:text-start">
                    <p className=" text-[#232323] font-medium">{item.title}</p>
                    <h4 className="text-lg font-bold text-[#232323] my-1.5">
                        <span className="me-2.5 font-normal line-through text-[#666666]">{item.offerPrice}</span>${item.price}
                    </h4>
                    <div className="flex items-center gap-2 mt-2.5 justify-center md:justify-start">
                        <button className="flex h-6 w-6 rounded-full bg-transparent border-1 items-center justify-center">
                            <a className="flex h-4 w-4 rounded-full bg-[#ff0000]" href="#"></a>
                        </button>

                        <button className="flex h-6 w-6 rounded-full bg-transparent border-1 items-center justify-center">
                            <a className="flex h-4 w-4 rounded-full bg-[#000000]" href="#"></a>
                        </button>

                        <button className="flex h-6 w-6 rounded-full bg-transparent border-1 items-center justify-center">
                            <a className="flex h-4 w-4 rounded-full bg-[#ffff00]" href="#"></a>
                        </button>
                    </div>
                    <p className="mt-4 text-sm md:text-[16px]">{item.details}</p>
                    <div className="flex items-center gap-2.5 mt-2.5 justify-center md:justify-start">
                        <button className="h-10 w-10 rounded-full flex items-center justify-center bg-[#ffef97] hover:bg-[#232323] hover:text-white transition-colors">
                            <a href="#"><FaRegEye /></a>
                        </button>
                        <button className="h-10 w-10 rounded-full flex items-center justify-center bg-[#ffef97] hover:bg-[#232323] hover:text-white transition-colors">
                            <a href="#"><IoMdHeart /></a>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}
