

import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router";

export default function ProductsCard2({ item }) {

    const [show, setShow] = useState(0);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-[.5fr_1fr] gap-5 w-full">
                <Link to={`/products/${item.id}`} className="relative">
                    {item?.image.map((i, o) => (
                        <img key={i} onMouseEnter={() => setShow(1)} onMouseLeave={() => setShow(0)} className={`h-auto w-full rounded-2xl ${show === o ? "block" : "hidden"}`} src={i} alt="" />
                    ))}

                    <div className="flex items-center justify-center text-xl text-yellow-400 absolute bottom-6 left-1/2 -translate-x-1/2">
                        {item.rating}

                    </div>
                </Link>

                <div className="text-center md:text-start">
                    <Link to={`/products/${item.id}`}>
                        <p className=" text-[#232323] font-medium">{item.title}</p>
                        <h4 className="text-lg font-bold text-[#232323] my-1.5">
                            <span className="me-2.5 font-normal line-through text-[#666666]">{item.offerPrice}</span>${item.price}
                        </h4>
                    </Link>
                    <div className="flex items-center gap-2 justify-start">
                        {
                            item?.color.map((item, i) => (
                                <button className="flex h-6 w-6 rounded-full bg-transparent border-1 items-center justify-center">
                                    <div style={{ background: `${item}` }} onClick={() => setShow(i)} className="flex h-4 w-4  rounded-full" href="#"></div>
                                </button>
                            ))
                        }

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
        </div>
    )
}
