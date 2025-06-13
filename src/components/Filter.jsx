
export default function Filter() {
    return (
        <div className="border border-[#e9e9e9]">
            <h2 className="p-4 text-[#232323] bg-[#f5f5f5]">Filter By</h2>
            <div className="p-4 border-b border-[#e9e9e9]">
                <h4 className="text-[#232323] font-semibold mb-2">Availability</h4>
                <div className="mb-0.5">
                    <input type="checkbox" name="stock" />
                    <label className="text-sm text-[#787878] font-semibold ms-2" htmlFor="stock">In Stock</label>
                </div>
                <div>
                    <input type="checkbox" name="out of stock" />
                    <label className="text-sm text-[#787878] font-semibold ms-2" htmlFor="out of stock">Out Of Stock</label>
                </div>
            </div>
            <div className="p-4 border-b border-[#e9e9e9]">
                <h4 className="text-[#232323] font-semibold mb-2">Price</h4>
                <div className="flex items-center gap-5">
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
                <h4 className="text-[#232323] font-semibold mb-2">Color</h4>
                <div className="grid grid-cols-3 xl:grid-cols-5 items-center">
                    <div className="rounded-full border-0 h-10 w-10 bg-[#000000] mb-5"></div>
                    <div className="rounded-full border-0 h-10 w-10 bg-[#0000ff] mb-5"></div>
                    <div className="rounded-full border-0 h-10 w-10 bg-[#a52a2a] mb-5"></div>
                    <div className="rounded-full border-0 h-10 w-10 bg-[#808080] mb-5"></div>
                    <div className="rounded-full border-0 h-10 w-10 bg-[#008000] mb-5"></div>
                    <div className="rounded-full border-0 h-10 w-10 bg-[#ffa500]"></div>
                    <div className="rounded-full border-0 h-10 w-10 bg-[#ffc0cb]"></div>
                    <div className="rounded-full border-0 h-10 w-10 bg-[#800080]"></div>
                    <div className="rounded-full border-0 h-10 w-10 bg-[#ff0000]"></div>
                    <div className="hidden xl:block rounded-full border-0 h-10 w-10 bg-[#ffff00]"></div>
                </div>
            </div>
            <div className="p-4 border-b border-[#e9e9e9]">
                <h4 className="text-[#232323] font-semibold mb-2">Size</h4>
                <div className="flex items-center gap-2">
                    <h3 className="flex items-center justify-center h-10 w-10 border border-[#eee] font-semibold text-[#787878] text-sm">S</h3>
                    <h3 className="flex items-center justify-center h-10 w-10 border border-[#eee] font-semibold text-[#787878] text-sm">M</h3>
                    <h3 className="flex items-center justify-center h-10 w-10 border border-[#eee] font-semibold text-[#787878] text-sm">L</h3>
                    <h3 className="flex items-center justify-center h-10 w-10 border border-[#eee] font-semibold text-[#787878] text-sm">XL</h3>
                </div>
            </div>
        </div>
    )
}
