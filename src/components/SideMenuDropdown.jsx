import { useState } from "react";
import { dropdownLink } from "../Utilities/productsCollection";
import { Link } from "react-router";


export default function SideMenuDropdown({ dropOpen, setOpen }) {
  const [dropChildOpen, setChildDropOpen] = useState(false)

  return (
    <div onClick={(e) => { e.preventDefault(); e.stopPropagation() }} className="flex flex-col justify-start gap-2.5 ms-0.5">
      {dropOpen &&
        dropdownLink.map((link, i) => (
          <div key={i} className="flex items-start flex-col">
            <div onClick={(e) => { e.preventDefault(); setChildDropOpen(dropChildOpen === i ? false : i); }} className="flex items-center justify-between">

              {link.nav} <span className="text-2xl">{link.icon}</span>
            </div>

            {dropChildOpen === i &&
              <div onClick={() => setOpen(false)} className="flex flex-col gap-1.5 mt-2.5 ms-2.5">

                {link?.sub && link?.items.map(o => (
                  <Link to={o.link} key={o.id}>
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
