import { Link } from "react-router"

import { furnitureDetails } from "../Utilities/productsCollection"


export default function Furniture() {

    return (
        <div className="container-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">

            {
                furnitureDetails.map((item,i) => (
                    <div key={i} style={{ backgroundImage: `url(${item.fubgimage})` }} className="bg-cover bg-center h-60 w-full py-10 px-5 text-end" >
                        <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#232323] mb-2">{item.title}</h2>
                        <h5 className="text-lg font-semibold text-[#787878] mb-5">{item.details}</h5>

                        <Link to={`/products`}>
                            <button className="text-sm font-normal uppercase py-2.5 px-5 bg-[#ffef97] text-[#232323] hover:bg-[#232323] hover:text-white transition-colors">
                                Buy Now
                            </button>
                        </Link>

                    </div>
                ))
            }
        </div>
    )
}
