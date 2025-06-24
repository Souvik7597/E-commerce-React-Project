

import { Link } from "react-router";

import { RxCross2 } from "react-icons/rx";
import { navLinks } from "../Utilities/productsCollection";
import { useState } from "react";
import SideMenuDropdown from "./SideMenuDropdown";


export default function SideMenuBar({ open, setOpen }) {
    const [dropOpen, setDropOpen] = useState(false)
    return (
        <div>
            {
                open && (
                    <div onClick={(e)=> e.stopPropagation()} className="absolute top-0 left-0 bg-white border border-[#eee] z-50 w-8/12 sm:w-1/2 py-12 px-8 min-h-svh">
                        <div onClick={() => setOpen(false)} className="float-end text-4xl -mt-6 mb-6">
                            <RxCross2 />
                        </div>
                        <ul className="flex flex-col justify-center gap-8 mt-6">
                            {
                                navLinks.map((item, i) => (
                                    <Link onClick={(e)=> {
                                        item.link == "#" ? e.preventDefault() :null;
                                        item?.drop ? setDropOpen(!dropOpen) :null;
                                        // item.link == "#" ? setOpen(true) :setOpen(false);
                                        
                                        }} key={i} to={item.link}>
                                        <li className="flex items-center justify-between border-b border-[#eee] pb-5 text-lg text-black">{item.nav} <span className="text-2xl">{item?.icon}</span></li>
                                        {item?.drop &&<SideMenuDropdown setDropOpen={setDropOpen} dropOpen={dropOpen} setOpen={setOpen} />}
                                    </Link>
                                ))
                            }

                        </ul>


                    </div>
                )
            }
        </div>
    )
}
