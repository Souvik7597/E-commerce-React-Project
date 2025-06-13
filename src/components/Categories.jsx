
export default function Categories() {
    return (
        <div className="border border-[#e9e9e9] block">
            <h2 className="bg-[#f5f5f5] p-4 text-center">Shop By Categories</h2>
            <form className="flex items-center justify-center gap-2">
                <select className="bg-white  p-2  outline-0 w-full" name="products">
                    <option value="Featured">Stool</option>
                    <option value="Best Selling">Bench</option>
                    <option value="A-Z">Desk</option>
                    <option value="Z-A">ADrink Table</option>
                    <option value="low to high">Bunching</option>
                    <option value="old to new">Console</option>
                    <option value="new to old">Coffee</option>
                </select>
            </form>
            <form className="flex items-center justify-center gap-2">
                <select className="bg-white p-2 w-full outline-0" name="products">
                    <option value="Featured">Chair</option>
                    <option value="Best Selling">Sofa Chair</option>
                    <option value="A-Z">Club Chair</option>
                    <option value="Z-A">Swing Chair</option>
                    <option value="low to high">Wing Chair</option>
                    <option value="old to new">Sleeper Chair</option>
                    <option value="new to old">Cantilever Chair</option>
                </select>
            </form>
            <form className="flex items-center justify-center gap-2">
                <select className="bg-white p-2 w-full outline-0" name="products">
                    <option value="Featured">Sofa</option>
                    <option value="Best Selling">Sleeper Sofa</option>
                    <option value="A-Z">Settee Sofa</option>
                    <option value="Z-A">Lawson Sofa</option>
                    <option value="low to high">Knole Sofa</option>
                    <option value="old to new">Swing Sofa</option>
                    <option value="new to old">Tuxedo Sofa</option>
                </select>
            </form>
        </div>
    )
}
