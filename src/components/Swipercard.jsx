import { Link } from "react-router"


export default function Swipercard({ info }) {

    const sdProps = { backgroundImage: `url(${info?.bgImage})` }


    return (
        <div style={sdProps} className="p-7 w-full lg:h-svh h-90  bg-cover bg-center flex flex-col items-center lg:pt-15 xl:pt-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#232323] mb-6">{info?.title}</h2>
            <h5 className="hidden md:block text-sm text-[#444444] bg-[#fff097] py-3 px-12 mb-7 font-medium w-fit text-center">
                Design Your Home Next Gen, Shop Set Of Product
            </h5>
            <Link to={`/products`}>
                <button className="py-2.5 px-5 bg-[#232323] text-white hover:bg-[#fff097] hover:text-[#232323] transition-colors text-sm uppercase font-semibold">Shop Now</button>
            </Link>
        </div>
    )
}
