
import spImage1 from "../images/spImage1-1st.webp"
import spImage2 from "../images/spImage2-1st.webp"
import spImage3 from "../images/spImage3.webp"
import spImage4 from "../images/spImage1-2nd.webp"
import spImage5 from "../images/spImage4.webp"
import spImage6 from "../images/spImage5-1st.webp"
import commentImage from "../images/comment.webp"
import SidebarProduct from "./SidebarProduct";
import leftbanner from "../images/leftbanner.avif"




import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";


const npDeatils = [
  {
    image: spImage1,
    star: <FaStar />,
    title: "Zigzag Wall Furniture Range",
    offerPrice: "",
    price: "25.00"
  },
  {
    image: spImage2,
    star: <FaStar />,
    title: "Lowback Pellentesque  Chair",
    offerPrice: "",
    price: "35.00"
  },
  {
    image: spImage3,
    star: <FaStar />,
    title: "Texas  Wardrobe Chair",
    offerPrice: "$40.00",
    price: "35.00"
  },
]

const spDeatils = [
  {
    image: spImage4,
    star: <FaRegStar />,
    title: "Zigzag Wall Furniture Range",
    offerPrice: "",
    price: "25.00"
  },
  {
    image: spImage5,
    star: <FaStar />,
    title: "Lowback Pellentesque  Chair",
    offerPrice: "",
    price: "35.00"
  },
  {
    image: spImage6,
    star: <FaRegStar />,
    title: "Texas  Wardrobe Chair",
    offerPrice: "$40.00",
    price: "35.00"
  },
]
export default function Comment() {
  return (
    <div className="grid grid-cols-[0.5fr_1.5fr] justify-center gap-5 py-12 px-23">

      <div className="h-[180vh] overflow-y-auto invisible-scrollbar">

        <div className="border border-[#e9e9e9] w-full h-fit mb-5">
          <h2 className="bg-[#f5f5f5] p-4 text-center text-[#232323] font-semibold">New Product</h2>

          <div className="p-2 flex flex-col justify-center gap-3">

            {
              npDeatils.map((item) => (
                <SidebarProduct item={item} />
              ))
            }
          </div>
        </div>

        <img className="w-full" src={leftbanner} alt="" />

        <div className="border border-[#e9e9e9] w-full h-fit mt-5">
          <h2 className="bg-[#f5f5f5] p-4 text-center text-[#232323] font-semibold">Special Product</h2>

          <div className="p-2 flex flex-col  justify-center gap-3">

            {
              spDeatils.map((item) => (
                <SidebarProduct item={item} />
              ))
            }
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl text-[#232323] font-medium ">Viderer voluptatum te eum</h2>
          <div className="flex items-center justify-between gap-5">

            <div className="flex items-center gap-1">
              <IoPersonSharp />
              <p className="text-sm text-[#787878]">Ishi Themes</p>
            </div>

            <div className="flex items-center gap-1">
              <MdOutlineCalendarMonth />
              <p className="text-sm text-[#787878]">29 Aug 2020</p>
            </div>

          </div>
        </div>
        <img className="w-full mb-5" src={commentImage} alt="" />

        <p className="text-[#787878] font-medium mb-8">Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light, creeping there saying. The lesser appear without very darkness seasons saw be. Dry cattle. Man very third.</p>

        <div>
          <h3 className="mb-5 text-xl text-[#232323] font-medium">Leave a Comment</h3>

          <form>
            <div className="flex items-center gap-5 mb-5">
              <div className="w-full p-4 border border-[#e9e9e9]">
                <input type="text" id="pwd" placeholder="Your Name" name="text" />
              </div>

              <div className="w-full p-4 border border-[#e9e9e9]">
                <input type="email" id="email" placeholder="Enter email" name="email" />
              </div>
            </div>

            <textarea className="w-full p-3 border border-[#e9e9e9] mb-5" placeholder="Comment" rows="5" id="comment" name="text">

            </textarea>

            <button type="submit" className="py-2.5 px-5 bg-[#ffef97] text-[#232323] uppercase text-sm">Post Comment</button>
          </form>
        </div>

      </div>
    </div>
  )
}

