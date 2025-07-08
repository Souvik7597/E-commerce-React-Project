import { useEffect, useMemo, useState } from "react"


import { TfiLayoutColumn4 } from "react-icons/tfi";
import { TbColumns3 } from "react-icons/tb";
import { TbColumns2 } from "react-icons/tb";
import { TbColumns1 } from "react-icons/tb";
import Productcard from "./Productcard";

import { products } from "../Utilities/productsCollection.jsx"
import ProductsCard2 from "./ProductsCard2.jsx";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { RxRows } from "react-icons/rx";

import { GiHamburgerMenu } from "react-icons/gi";


export default function Collection() {

  const [cols, setCols] = useState(() => {
    return window.innerWidth < 500 ? 1 : window.innerWidth < 767 ? 2 : window.innerWidth < 1200 ? 3 : 3
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCols(window.innerWidth < 500 ? 1 : window.innerWidth < 767 ? 2 : window.innerWidth < 1200 ? 3 : 3)
    })
  }, [])

  const [page, setPage] = useState(1);

  const [open, setOpen] = useState(false);

  const [openRow, setOpenRow] = useState(false);
  const [sort, setSort] = useState(null);


  function sortRecords(data, type){
      if (!data )return
      const clone = [...data];
      if(type === "asc") return clone.sort((a, b) => a.title.localeCompare(b.title))
      if(type === "desc") return clone.sort((a, b) => b.title.localeCompare(a.title))
      if(type === "lth") return clone.sort((a, b) => a.price - b.price)
      return data
  }



  const recordsPerPage = 9;

  const lastIndex = page * recordsPerPage;

  const firstIndex = lastIndex - recordsPerPage;

  
  const nPage = Math.ceil(products.length / recordsPerPage);
  
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  
  const records = useMemo(()=> sortRecords(products.slice(firstIndex, lastIndex),sort) ,[sort,firstIndex,lastIndex]);

  function prePage() {
    if (page !== 1) {
      setPage(page - 1)
    }
  }

  function changeCPage(id) {
    setPage(id)
  }

  function nextPage() {
    if (page !== nPage) {
      setPage(page + 1)
    }
  }
  

  return (
    <div className="w-full relative">

      <div className="p-5 bg-gray-200 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <TbColumns1 className="block sm:hidden" onClick={() => { setCols(1); setOpenRow(false) }} />
            <TbColumns2 className="hidden sm:block" onClick={() => { setCols(2); setOpenRow(false) }} />
            <TbColumns3 className="hidden md:block" onClick={() => { setCols(3); setOpenRow(false) }} />
            <RxRows onClick={() => setOpenRow(true)} />
          </div>
          <p className="hidden md:block">Showing {products.length} of {products.length} products</p>


        </div>

        <div>
          <form className="hidden lg:flex items-center gap-2">
            <label for="cars">Sort By</label>
            <select className="bg-white border border-[#e9e9e9] p-2 w-50 outline-0" onChange={(e) => setSort(e.target.value)} name="products">
              <option value="">Featured</option>
              <option value="asc">Alphabetically, A-Z</option>
              <option value="desc">Alphabetically, Z-A</option>
              <option value="lth">Price, low to high</option>
            </select>
          </form>

          <div onClick={() => setOpen(true)} className="inline-flex lg:hidden items-center gap-3  py-2 px-4 rounded bg-[#ffef97] text-[#232323]">
            <GiHamburgerMenu className="text-xl" /> <p>Filter Product</p>
          </div>

          {
            open && (

              <div className="bg-[#fff] w-10/12 sm:w-7/12 md:w-6/12 p-2 sm:p-6 absolute right-0 -top-40 z-50 border border-[#eee] shadow-md rounded-lg">
                <div className="text-center border-b border-[#eee] pb-4">
                  <h6>Filter Product</h6>
                  <p>Showing {products.length} of {products.length} products</p>
                  <div onClick={() => setOpen(false)} className=" float-end -mt-12 text-2xl">
                    <RxCross2 />
                  </div>
                </div>

                <div className="p-4 border-b border-[#e9e9e9]">
                  <h4 className="text-[#232323] font-semibold mb-5 text-center border-b pb-3 border-[#eee]">Availability</h4>
                  <div className="flex items-center justify-between">
                    <div className="mb-0.5">
                      <input type="checkbox" name="stock" />
                      <label className="text-sm text-[#787878] font-semibold ms-2" htmlFor="stock">In Stock</label>
                    </div>
                    <div>
                      <input type="checkbox" name="out of stock" />
                      <label className="text-sm text-[#787878] font-semibold ms-2" htmlFor="out of stock">Out Of Stock</label>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-[#e9e9e9]">
                  <h4 className="text-[#232323] font-semibold mb-5 text-center border-b pb-3 border-[#eee]">Price</h4>
                  <div className="flex items-center justify-between gap-5">
                    <div>
                      <label className="text-[#787878] font-bold" htmlFor="from">$</label>
                      <input className="ms-2 border border-[#e9e9e9] w-17 h-10 ps-1.5" placeholder="From" type="text" name="from" />
                    </div>
                    <div>
                      <label className="text-[#787878] font-bold" htmlFor="to">$</label>
                      <input className="ms-2 border border-[#e9e9e9] w-17 h-10 ps-1.5" placeholder="To" type="text" name="to" />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-[#e9e9e9]">
                  <h4 className="text-[#232323] font-semibold mb-5 text-center border-b pb-3 border-[#eee]">Color</h4>
                  <div className="flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-5 items-center">
                      <div className="rounded-full border-0 h-10 w-10 bg-[#000000] mb-5"></div>
                      <div className="rounded-full border-0 h-10 w-10 bg-[#0000ff] mb-5"></div>
                      <div className="rounded-full border-0 h-10 w-10 bg-[#a52a2a] mb-5"></div>
                      <div className="rounded-full border-0 h-10 w-10 bg-[#808080] mb-5"></div>
                      <div className="rounded-full border-0 h-10 w-10 bg-[#008000] mb-5"></div>
                      <div className="rounded-full border-0 h-10 w-10 bg-[#ffa500]"></div>
                      <div className="rounded-full border-0 h-10 w-10 bg-[#ffc0cb]"></div>
                      <div className="rounded-full border-0 h-10 w-10 bg-[#800080]"></div>
                      <div className="rounded-full border-0 h-10 w-10 bg-[#ff0000]"></div>
                      <div className="rounded-full border-0 h-10 w-10 bg-[#ffff00]"></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-[#e9e9e9]">
                  <h4 className="text-[#232323] font-semibold mb-5 text-center border-b pb-3 border-[#eee]">Size</h4>
                  <div className="flex items-center justify-between">
                    <h3 className="flex items-center justify-center h-10 w-10 border border-[#eee] font-semibold text-[#787878] text-sm">S</h3>
                    <h3 className="flex items-center justify-center h-10 w-10 border border-[#eee] font-semibold text-[#787878] text-sm">M</h3>
                    <h3 className="flex items-center justify-center h-10 w-10 border border-[#eee] font-semibold text-[#787878] text-sm">L</h3>
                    <h3 className="flex items-center justify-center h-10 w-10 border border-[#eee] font-semibold text-[#787878] text-sm">XL</h3>
                  </div>
                </div>

                <form className="p-4 flex items-center justify-between gap-2">
                  <label for="cars">Sort By</label>
                  <select className="bg-white border border-[#e9e9e9] p-2 w-50 outline-0" name="products">
                    <option value="Featured">Featured</option>
                    <option value="Best Selling">Best Selling</option>
                    <option value="A-Z">Alphabetically, A-Z</option>
                    <option value="Z-A">Alphabetically, Z-A</option>
                    <option value="low to high">Price, low to high</option>
                    <option value="old to new">Date, old to new</option>
                    <option value="new to old">Date, new to old</option>
                  </select>
                </form>

              </div>
            )
          }

        </div>

      </div>

      {!openRow ?
        <div className={`grid grid-cols-${cols} gap-5`}>
          {
            records.map((item, i) => (
              <Productcard item={item} key={i} />
            ))
          }

        </div> :

        <div className="grid grid-cols-1 gap-5">
          {
            records.map((item, i) => (
              <ProductsCard2 item={item} key={i} />
            ))
          }
        </div>
      }

      <div className="flex flex-col md:flex-row gap-5 items-center justify-between bg-[#f5f5f5] p-5 mt-10">

        <p>Showing {firstIndex} - {lastIndex >= products.length ? products.length : lastIndex} of {products.length} products</p>

        <ul className="inline-flex items-center border border-[#eee]">
          <li onClick={prePage} className="border border-[#eee] py-2 px-3 text-2xl">
            <MdKeyboardArrowLeft />
          </li>
          {
            numbers.map((n, i) => (
              <li onClick={() => changeCPage(n)} className={`border py-2 px-3 border-[#eee] ${page === n ? "bg-blue-800 text-white" : ""}`} key={i}>
                {n}
              </li>
            ))
          }

          <li onClick={nextPage} className="border py-2 px-3 border-[#eee] text-2xl">
            <MdKeyboardArrowRight />
          </li>
        </ul>
      </div>
    </div>
  )
}
