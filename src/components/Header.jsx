import bgImage from "../images/header-bg.webp"
import lgImage from "../images/logo.webp"
import { GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import Hero from "./Hero";

import { Link, useLocation } from "react-router";
import SideMenuBar from "./SideMenuBar";
import { useEffect, useState } from "react";

import LoginCreatAccount from "./LoginCreatAccount";
import DropdownMenu from "./DropdownMenu";
import { navLinks } from "../Utilities/productsCollection";
import SearchInput from "./SearchInput";



export default function Header({ cart }) {
    const bgProps = { backgroundImage: `url(${bgImage})` }

    const location = useLocation();

    const [open, setOpen] = useState(false);

    const [loginOpen, setLoginOpen] = useState(false);

    const [dropOpen, setDropOpen] = useState(false)

    const [searchOpen, setSearchOpen] = useState(false)

    // const [addEffect, setAddEffect] =useState(false)

    useEffect(() => {
        document.addEventListener("click", (e) => {
            e.stopPropagation();
            setLoginOpen(false);
            setOpen(false)
            setSearchOpen(false)
            setDropOpen(false)
        })

    }, [])


    // window.addEventListener("resize",()=>{
    //     setAddEffect(window.innerWidth<1200)
    // })

    return (
        <>
            <div style={bgProps} className="py-7 px-5 sm:px-9 md:px-12 bg-cover bg-center">
                <header className="flex items-center justify-between relative">
                    <img className="order-2 md:order-1 w-30 sm:w-40 md:w-50" src={lgImage} alt="siteLogo" />

                    <ul className="gap-9 hidden order-2 md:flex items-center">
                        {
                            navLinks.map((n, i) => (
                                <Link key={i} to={n.link}>
                                    <li
                                        onClick={(e) => { n?.drop ? setDropOpen(!dropOpen) : null; e.stopPropagation();e.preventDefault() }}

                                        // onMouseOver={()=>!addEffect ? setDropOpen(true):null}
                                        // onMouseOut={()=>!addEffect ? setDropOpen(false) : null}

                                        className="text-lg">{n.nav}</li>
                                    {n?.drop && <DropdownMenu setDropOpen={setDropOpen} dropOpen={dropOpen} />}
                                </Link>
                            ))
                        }
                    </ul>

                    <div className="flex items-center gap-4 order-3">
                        <button onClick={(e) => {e.stopPropagation();setSearchOpen(!searchOpen)}} className="text-2xl md:block hidden"><GoSearch /></button>
                        
                        <button onClick={(e) => {
                            e.stopPropagation();
                            setLoginOpen(!loginOpen)
                        }} className="text-2xl"><IoPersonOutline /></button>
                        
                        <Link to={"/cart"} className="relative">
                            <button className="text-2xl"><BsCart2 /></button>
                            <span className="absolute -top-2 -right-3 text-sm h-5 w-5 text-[#232323] flex items-center justify-center border-0 rounded-full bg-[#ffef97]">
                                {
                                    cart.reduce((acc, crr) => crr.count + acc, 0)

                                }
                                {/* {cart.length} */}
                            </span>
                        </Link>
                    </div>

                    <div className="flex gap-4 md:hidden order-1">
                        <button onClick={(e) => { e.stopPropagation(); setOpen(true) }} className="text-2xl"><GiHamburgerMenu /></button>
                        <button onClick={(e) => {e.stopPropagation();setSearchOpen(!searchOpen)}} className="text-2xl"><GoSearch /></button>
                    </div>
                </header>
                {location.pathname === "/" && <Hero />}

                <SideMenuBar setOpen={setOpen} open={open} />

                <LoginCreatAccount setLoginOpen={setLoginOpen} loginOpen={loginOpen} />

                <SearchInput setSearchOpen={setSearchOpen} searchOpen={searchOpen} />

            </div>
        </>
    )
}
