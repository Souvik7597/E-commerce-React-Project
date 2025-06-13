
import { FaRegEye } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router";


export default function Productcard({children,  item }) {



    return (
        <Link to={`/products/${item.id}`} className="product-card ">
            <div className="relative ">
                <div>
                    <img className="w-full border border-[#f6f8fa]" src={item.image} alt="" />
                </div>

                <div key={item.id} className="absolute bottom-6 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center text-xl text-yellow-400">
                    {item.rating}
               </div>

                <div className="xl:hidden flex flex-col gap-2.5 absolute xl:top-5 sm:top-5 md:top-7 top-3 xl:right-5 right-3 product-card-button-none">
                    <button className="xl:h-10 xl:w-10 h-10 w-10 text-lg md:text-[16px] rounded-full flex items-center justify-center bg-[#ffef97] hover:bg-[#232323] hover:text-white transition-colors">
                        <a href="#"><FaRegEye /></a>
                    </button>
                    <button className="xl:h-10 xl:w-10  h-10 w-10 text-lg md:text-[16px] rounded-full flex items-center justify-center bg-[#ffef97] hover:bg-[#232323] hover:text-white transition-colors">
                        <a href="#"><IoMdHeart /></a>
                    </button>
                </div>
            </div>

            <div className="text-center">
                <p className="text-[#232323] font-medium mt-2.5">{item.title}</p>
                <h4 className="text-lg font-bold text-[#232323] my-1.5">
                    <span className="me-2.5 font-normal line-through text-[#666666]">{item.offerPrice}</span>${item.price}
                </h4>
                <div className="flex items-center gap-2 justify-center">
                    <button className="flex h-6 w-6 rounded-full bg-transparent border-1 items-center justify-center">
                        <a className="flex h-4 w-4  rounded-full bg-[#ff0000]" href="#"></a>
                    </button>

                    <button className="flex h-6 w-6 rounded-full bg-transparent border-1 items-center justify-center">
                        <a className="flex h-4 w-4 rounded-full bg-[#000000]" href="#"></a>
                    </button>

                    <button className="flex h-6 w-6 rounded-full bg-transparent border-1 items-center justify-center">
                        <a className="flex h-4 w-4 rounded-full bg-[#ffff00]" href="#"></a>
                    </button>
                </div>
            </div>

            <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-10/12 special-product-timer transition-opacity duration-500">
                {children}
            </div>
        </Link>
    )
}
