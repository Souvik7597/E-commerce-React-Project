
import { Link } from "react-router"
import { sofa, chair, table } from "../Utilities/productsCollection"

import dropImage1 from "../images/dropdownImage1.avif"
import dropImage2 from "../images/dropdownImage2.avif"


export default function DropdownMenu({ dropOpen,setDropOpen }) {
    return (
        <div>

            {
                dropOpen &&

                <div className="absolute top-20 left-0 z-50 grid grid-cols-3 lg:grid-cols-5 gap-5 bg-white rounded p-10 items-start w-full">
                    <div>
                        <h5 className="text-[#232323] lg:text-xl xl:text-2xl font-semibold border-b border-[#eee] pb-5 text-center">Modern Sofa</h5>
                        <div>
                            <ul className="flex flex-col gap-3 text-[#787878] mt-5 items-center">
                                {
                                    sofa.map((item, i) => (
                                        <Link onClick={()=>setDropOpen(false)} key={i} to={item.link}>
                                            <li>{item.title}</li>
                                        </Link>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-[#232323] lg:text-xl xl:text-2xl font-semibold border-b border-[#eee] pb-5 text-center">Wooden Chair</h5>
                        <div>
                            <ul className="flex flex-col gap-3 text-[#787878] mt-5 items-center">
                                {
                                    chair.map((item, i) => (
                                        <Link onClick={()=>setDropOpen(false)} key={i} to={item.link}>
                                            <li>{item.title}</li>
                                        </Link>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h5 className="text-[#232323] lg:text-xl xl:text-2xl font-semibold border-b border-[#eee] pb-5 text-center">Stylish Table</h5>
                        <div>
                            <ul className="flex flex-col gap-3 text-[#787878] mt-5 items-center">
                                {
                                    table.map((item, i) => (
                                        <Link onClick={()=>setDropOpen(false)} key={i} to={item.link}>
                                            <li>{item.title}</li>
                                        </Link>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <img className="hidden lg:block" src={dropImage1} alt="" />

                    <img className="hidden lg:block" src={dropImage2} alt="" />
                </div>
            }
        </div>

    )
}
