import Categories from "./Categories";
import Collection from "./Collection";
import Filter from "./Filter";


import FurnitureDetailsPage from "./FurnitureDetailsPage";

import SidebarProduct from "./SidebarProduct";
import leftbanner from "../images/leftbanner.avif"


import { products } from "../Utilities/productsCollection";



const npDeatails = products.slice(5, 8)
const spDeatails = products.slice(4, 7)


export default function ProductDetailsPage({title}) {



    return (
        <div className="container-width grid grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] gap-15 lg:gap-5 py-12 ">
            <div className="h-auto lg:h-[180vh] lg:overflow-y-auto invisible-scrollbar order-2 xl:order-1">
                <div className="flex flex-col gap-5">
                    <div>
                        <Categories />
                    </div>
                    <div className="hidden lg:block">
                        <Filter />
                    </div>
                </div>


                <div className="border border-[#e9e9e9] w-full h-fit my-5">
                    <h2 className="bg-[#f5f5f5] p-4 text-center text-[#232323] font-semibold">New Product</h2>

                    <div className="p-2 flex flex-col  justify-center gap-3">

                        {
                            npDeatails.map((item,i) => (
                                <SidebarProduct key={i} item={item} />
                            ))
                        }
                    </div>
                </div>

                <img className="w-full" src={leftbanner} alt="" />

                <div className="border border-[#e9e9e9] w-full h-fit mt-5">
                    <h2 className="bg-[#f5f5f5] p-4 text-center text-[#232323] font-semibold">Special Product</h2>

                    <div className="p-2 flex flex-col  justify-center gap-3">

                        {
                            spDeatails.map((item,i) => (
                                <SidebarProduct key={i} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>


            <div className="h-auto lg:h-[180vh] lg:overflow-y-auto invisible-scrollbar order-1 lg:order-2">
                <div className="flex flex-col gap-5">
                    <FurnitureDetailsPage title={title} />
                    <Collection />
                </div>
            </div>
        </div>
    )
}
