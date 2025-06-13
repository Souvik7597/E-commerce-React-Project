import { Link } from "react-router"
import sc3Img from "../images/section3.webp"
import { useEffect, useState } from "react"

export default function Offer() {

  const [imgShown, setImgShown] = useState(() => window.innerWidth < 1000)

  useEffect(() => {

    window.addEventListener("resize", () => {
      setImgShown(window.innerWidth < 1000)
    })
  }, [])

  const bgProps = { backgroundImage: `url(${sc3Img})` }

  return (
    <>
      <div style={imgShown ? { background: "#f6f8fa" } : bgProps} className="px-7 py-24 bg-cover bg-center ">

        <div className="container-width lg:me-10 text-center lg:ms-auto lg:w-1/2">

          <h5 className="font-semibold sm:text-lg md:text-xl text-[#232323] mb-6">On Modern Furniture Catalog</h5>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#232323] mb-4">GET OFFER UP TO <span className="text-[#f30101]">50%</span></h2>
          <p className="text-sm text-[#787878] mb-6">Unique and modern furniture product directly <br /> from us and get offers.</p>
          <Link to={`/products`}>
            <button className="py-2.5 px-5 text-[#232323] bg-[#ffef97] hover:bg-[#232323] hover:text-white font-medium">View Collection</button>
          </Link>
        </div>

      </div>
    </>
  )
}
