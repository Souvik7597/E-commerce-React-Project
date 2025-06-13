import { useState } from "react";
import { products } from "../Utilities/productsCollection";

import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";

export default function SearchInput({ searchOpen, setSearchOpen }) {

    const [searchQuery, setSearchQuery] = useState("");


    return (
        <div>
            {
                searchOpen &&
                <div className="absolute top-20  md:right-20 z-50">
                    <div className="flex items-center mb-5">
                        <input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} className="bg-white w-full p-3 outline-0 border border-[#efefef]" placeholder type="text" />
                        <button type="submit" className="p-3.5 text-xl bg-[#ffef97]"><IoIosSearch /></button>
                    </div>
                    {
                        searchQuery &&

                        <div className="flex flex-col gap-5 bg-white p-5 border border-[#efefef] shadow-lg">
                            {
                                products.filter((f) => f.title.toLowerCase().includes(searchQuery.toLowerCase())).map((item) => (

                                    <Link key={item.id} className="flex items-center gap-2.5" to={`/products/${item.id}`} onClick={() => setSearchQuery("") & setSearchOpen(false)}>
                                        <img width={65} src={item.image} alt="" />

                                        <div className="flex flex-col">
                                            <div className="text-[#232323] font-medium">
                                                {item.title}
                                            </div>
                                            <div className="text-[#666666] font-medium">
                                                <span className="me-0.5">$</span>{item.price}
                                            </div>
                                        </div>
                                    </Link>

                                ))
                            }
                        </div>
                    }
                </div>
            }
        </div>
    )
}
