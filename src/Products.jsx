
import { Link } from "react-router"
import { productsPageData } from "./Utilities/productsCollection"

export default function Products() {
  return (
    <div className="container-width py-12">
      <h2 className="text-2xl font-bold uppercase mb-10 text-[#232323]">Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
        {
          productsPageData.map((p, i) => (

            <Link key={i} to={p.link}>
              <div  className="flex flex-col items-center gap-10">
                <img className="border border-[#eee] shadow-lg rounded-md" src={p.image} alt="" />
                <h4 className="font-semibold text-lg md:text-xl lg:text-2xl products-text-1">{p.title}</h4>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
