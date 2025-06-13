import { useState } from "react";
import { dropdownLink } from "../Utilities/productsCollection";
import { Link } from "react-router";


export default function SideMenuDropdown({ dropOpen,setDropOpen }) {
  const [dropChildOpen, setChildDropOpen] = useState(false)

  return (
    <div className="flex flex-col justify-start gap-2.5">
      {dropOpen &&
        dropdownLink.map((link, i) => (
          <div key={i} className="flex items-center justify-between relative">
            {link.nav} <span className="text-2xl">{link.icon}</span>
            {dropChildOpen &&
            <div className=" md:absolute top-2.5">

              {link?.sub && link?.items.map(o => (
                <Link onClick={(e)=> {e.preventDefault();e.stopPropagation() ;setDropOpen(true);setChildDropOpen(!dropChildOpen)}}  to={o.link} key={o.id}>
                {o.nav}
                </Link>

              ))
              }
            </div>}
          </div>
        ))
      }

    </div>
  )
}
