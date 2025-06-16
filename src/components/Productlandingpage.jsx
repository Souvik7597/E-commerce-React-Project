
import landingImage from "../images/landingpageimage.avif"
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { TbRulerMeasure } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { BiDollarCircle } from "react-icons/bi";
import { CiGift } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import Productcard from "./Productcard"
import { useState, useRef } from "react"
import { SwiperSlide, Swiper, } from "swiper/react"
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


import { productLandingImages, productLandingButtons, products } from "../Utilities/productsCollection"
import { useParams } from "react-router";
import toast, { Toaster } from 'react-hot-toast';

export default function Productlandingpage({setProductId}) {

  const S = useRef(null)
  const { id } = useParams();

  const product = products.find(p => p.id == id)

  const showLandingProduct = products.slice(0, 4)

  const [click, setClick] = useState(product.image);



  const handleAddToCart = (id) => {
    setProductId(id);
    toast.success("Product added successfully")
  }



  return (

    <div className="container-width py-12 flex items-center justify-center flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mx-auto justify-center mb-10 w-full">
        <Toaster />
        <div>
          <img className="mb-8 w-full h-[600px]" src={click} alt="" />
          <Swiper className="w-full relative"
            navigation={false}
            modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => S.current = swiper}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
            }}

          >
            {
              productLandingImages.map((item, i) => (
                <SwiperSlide key={i}>

                  <img onClick={() => setClick(item)} src={item} alt="" />

                </SwiperSlide>
              ))
            }

            <div className="flex items-center justify-between">
              <button onClick={() => S.current?.slidePrev()} className="absolute z-50 top-9 -left-5 text-6xl">
                <MdKeyboardArrowLeft />
              </button>
              <button onClick={() => S.current?.slideNext()} className="absolute top-9 -right-5 z-50 text-6xl">
                <MdKeyboardArrowRight />
              </button>
            </div>
          </Swiper>

        </div>

        <div className="md:h-[200vh] md:overflow-y-auto md:invisible-scrollbar lg:h-auto">

          <h1 className="text-2xl lg:text-3xl font-semibold text-[#232323] mb-2.5">{product.title}</h1>
          <div className="flex items-center gap-0.5 mb-2.5">

            {
              product.rating.map((rating, i) => (
                <div key={i} className="text-[#cccccc]">{rating}</div>
              ))
            }
          </div>

          <div className="flex items-center gap-5">
            <h6 className="text-2xl font-semibold mb-2 text-[#232323]">${product.price}</h6>
            <h6 className="text-2xl font-normal mb-2 text-[#666666] line-through">{product.offerPrice}</h6>
          </div>
          <p className="text-sm text-[#666666] font-normal mb-1.5"><span className="font-semibold">Vendor :</span>  creative</p>
          <p className="text-sm text-[#666666] font-normal mb-2.5"><span className="font-semibold">Product Type :</span> furniture</p>

          <div className="flex items-center gap-4 mb-2.5">
            <div className="flex items-center gap-1">
              <IoMdHeart className="text-lg text-[#777777]" />
              <span className="text-md font-medium text-[#232323]">Add To Wishlist</span>
            </div>

            <div className="flex items-center gap-1">
              <TbRulerMeasure className="text-lg text-[#777777]" />
              <span className="text-md font-medium text-[#232323]">Size Chart</span>
            </div>
          </div>

          <div className="mb-3">
            <h6 className="text-[#666666] font-semibold mb-2">Size</h6>
            <div className="flex items-center gap-2">
              {
                product.size.map((size, i) => (
                  <div key={i} className="flex items-center justify-center h-10 w-10 border-1 rounded border-[#232323] text-sm text-[#232323] font-semibold bg-white uppercase">{size}</div>
                ))
              }
            </div>
          </div>

          <div className="mb-3">
            <h6 className="text-[#666666] font-semibold mb-2">Color</h6>
            <div className="flex items-center gap-2">
              <button className="flex h-8 w-8 rounded-full bg-transparent border-1 border-[#232323] items-center justify-center">
                <a className="flex h-6 w-6 rounded-full bg-[#ff0000]" href="#"></a>
              </button>

              <button className="flex h-8 w-8 rounded-full bg-transparent items-center justify-center">
                <a className="flex h-6 w-6 rounded-full bg-[#000000]" href="#"></a>
              </button>

              <button className="flex h-8 w-8 rounded-full bg-transparent items-center justify-center">
                <a className="flex h-6 w-6 rounded-full bg-[#ffff00]" href="#"></a>
              </button>

            </div>
          </div>

          <div className="mb-5">
            <h6 className="text-[#666666] font-semibold mb-2">Quantity</h6>
            <div className="flex items-center">
              <button className="flex items-center justify-center h-10 w-10 bg-white text-[#787878] border-1 border-[#e9e9e9] text-3xl">-</button>
              <button className="flex items-center justify-center h-10 w-10 bg-white text-[#232323] border-1 border-[#e9e9e9]">{product.count}</button>
              <button className="flex items-center justify-center h-10 w-10 bg-white text-[#787878] border-1 border-[#e9e9e9]">+</button>
            </div>
          </div>

          <div className="flex items-center gap-5 mb-5">
            <button onClick={() => handleAddToCart(product?.id)} className="py-3.5 px-7 font-semibold text-sm bg-[#ffef97] text-[#232323] w-1/2 hover:bg-[#232323] hover:text-white transition-colors">Add To Cart</button>
            <button className="py-3.5 px-7 font-bold text-sm bg-[#1990c6] text-white w-1/2 hover:bg-[#136f99] transition-colors">Buy It Now</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-center lg:gap-3 xl:gap-5 p-6 border-1 rounded border-[#e9e9e9] mb-5">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <BsBoxSeam className="h-8 w-8 text-[#787878]" />
                <div>
                  <h6 className="text-[#232323] font-semibold">Free Delivery</h6>
                  <p className="text-[#666666] text-sm font-medium">Lorem ipsum dummy</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:mb-5">
                <GoPerson className="h-8 w-8 text-[#787878]" />
                <div>
                  <h6 className="text-[#232323] font-semibold">Customer Support</h6>
                  <p className="text-[#666666] text-sm font-medium">Lorem ipsum dummy</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-5">
                <BiDollarCircle className="h-8 w-8 text-[#787878]" />
                <div>
                  <h6 className="text-[#232323] font-semibold">Big Savings</h6>
                  <p className="text-[#666666] text-sm font-medium">Lorem ipsum dummy</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CiGift className="h-8 w-8 text-[#787878]" />
                <div>
                  <h6 className="text-[#232323] font-semibold">Gift Voucher</h6>
                  <p className="text-[#666666] text-sm font-medium">Lorem ipsum dummy</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={landingImage} alt="" />
          </div>
        </div>
      </div>

      <div className="border border-[#e9e9e9] mb-10">

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-5">

          {
            productLandingButtons.map((btn, i) => (
              <button key={i} className="py-2 px-3 bg-[#f5f5f5] text-[#232323] text-sm font-bold uppercase">
                {btn.button}
              </button>
            ))
          }

        </div>
        <div className="px-10 pt-5 pb-10">
          <p className="text-[#787878] mb-5">Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>

          <div className="mb-5">
            <h4 className="font-bold text-[#232323] mb-4">Sample Unordered List</h4>

            <ul className="ms-2.5">
              <li className="flex items-center gap-3 text-[6px] text-[#787878] mb-1.5"><FaCircle /><span className="text-sm font-normal">Comodous in tempor ullamcorper miaculis</span></li>

              <li className="flex items-center gap-3 text-[6px] text-[#787878] mb-1.5"><FaCircle /><span className="text-sm font-normal">Pellentesque vitae neque mollis urna mattis laoreet.</span></li>

              <li className="flex items-center gap-3 text-[6px] text-[#787878] mb-1.5"><FaCircle /><span className="text-sm font-normal">Divamus sit amet purus justo.</span></li>

              <li className="flex items-center gap-3 text-[6px] text-[#787878]"><FaCircle /><span className="text-sm font-normal">Proin molestie egestas orci ac suscipit risus posuere loremou.
              </span></li>
            </ul>

          </div>

          <div className="mb-5">
            <h4 className="font-bold text-[#232323] mb-4">Sample Ordered List</h4>

            <ul className="ms-2.5">
              <li className="flex items-center gap-3 text-sm font-semibold text-[#787878] mb-1.5">1.<span className="text-sm font-normal">Comodous in tempor ullamcorper miaculis</span></li>

              <li className="flex items-center gap-3 text-sm font-semibold text-[#787878] mb-1.5">2.<span className="text-sm font-normal">Pellentesque vitae neque mollis urna mattis laoreet.</span></li>

              <li className="flex items-center gap-3 text-sm font-semibold text-[#787878] mb-1.5">3.<span className="text-sm font-normal">Divamus sit amet purus justo.</span></li>

              <li className="flex items-center gap-3 text-sm font-semibold text-[#787878]">4.<span className="text-sm font-normal">Proin molestie egestas orci ac suscipit risus posuere loremou.
              </span></li>
            </ul>

          </div>

          <div>
            <h4 className="font-bold text-[#232323] mb-4">Sample Paragraph Text</h4>

            <p className="text-sm text-[#787878] ms-2.5">Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summe!</p>

          </div>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-[#232323] mb-6 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {
            showLandingProduct.map((item, i) => (
              <Productcard key={i} item={item} />
            ))
          }
        </div>
      </div>

    </div>
  )
}
