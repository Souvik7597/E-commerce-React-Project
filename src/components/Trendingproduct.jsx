
import { BsArrowRight } from "react-icons/bs";
import SidebarProduct from "./SidebarProduct"
import Productcard from "./Productcard"
import { Link } from "react-router"
import { products } from "../Utilities/productsCollection";

const pDeatails = products.slice(5, 8)
const fDeatails = products.slice(4, 7)


export default function Trendingproduct() {
    return (
        <div className="container-width py-12 grid grid-cols-1 xl:grid-cols-[.5fr_1.5fr] gap-5">
            <div className="border border-[#e9e9e9] xl:w-full h-fit md:w-100 md:mx-auto">
                <h2 className="bg-[#ffef97] p-4 text-center text-[#232323] text-xl font-semibold">Furniture</h2>

                <div className="p-2 flex flex-col  justify-center gap-3">

                    {
                        fDeatails.map((item) => (
                            <SidebarProduct key={item.id} item={item} />
                        ))
                    }
                </div>
                <div className="flex items-center justify-center bg-[#f6f6f6] text-[#7a7a7a]">
                    <h3 className="font-semibold text-center p-4">View All products</h3>
                    <BsArrowRight />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-10">

                <h2 className="text-2xl text-[#232323] font-semibold">Trending Products</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        pDeatails.map((item) => (
                            <Productcard key={item.id} item={item} />
                        ))
                    }
                </div>
                <Link to={`/products`}>
                    <button className="py-2.5 px-5 bg-[#ffef97] text-[#232323] uppercase text-sm font-medium hover:bg-[#232323] hover:text-white transition-colors">View All</button>
                </Link>
            </div>
        </div>
    )
}
