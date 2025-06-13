import { Link } from "react-router";

export default function SidebarProduct({item}) {
    return (
        <Link key={item.id} to={`/products/${item.id}`}>
            
            <div  className="flex items-center gap-2">
                <div >
                    <img width={120} src={item.image} alt="" />
                </div>
                <div>
                    <p className="text-sm text-[#232323] font-medium">{item.title}</p>
                    <div className="flex items-center justify-start mt-2.5 text-xl text-yellow-400">
                        {item.rating}
                    </div>
                    <h4 className="text-lg font-semibold text-[#232323] mt-2.5">
                        <span className="font-normal line-through text-[#666666]">{item.offerPrice}</span> ${item.price}
                    </h4>
                </div>
            </div>


        </Link>
    )
}
