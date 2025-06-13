

import { FaRegCalendarAlt } from "react-icons/fa";

import { GoPersonFill } from "react-icons/go";

export default function Blogcard({ items }) {
  return (
    <div className="border border-[#eee] rounded-xl">
      <img className="rounded-t-xl" src={items.image} alt={items.title} />

      <div className="p-3">
        <h2 className="text-lg text-[#232323] mb-2.5">{items.title}</h2>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-[#787878] text-sm">
            <p><FaRegCalendarAlt/></p>
            {items.date}
          </div>
          <div className="flex items-center gap-1.5 text-[#787878] text-sm">
            <p><GoPersonFill/></p>
            {items.admin}
          </div>
        </div>

        <p className="text-[#787878] mb-2.5">{items.description}</p>
      </div>
    </div>
  )
}
