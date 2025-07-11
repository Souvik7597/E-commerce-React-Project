
import { MdDelete } from "react-icons/md";

export default function CartList({ cart, setCart }) {

    const handleIncreament = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    }
    const handleDecrement = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item?.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
            )
        );
    };
    const deleteProduct = (id) => {
        setCart(cart?.filter((item) => item?.id !== id));
    }

    return (
        <div className="container-width py-12">
            <div>
                {
                    cart.map((product) => (
                        <div key={product.id} className=" grid items-start xl:grid-cols-[0.5fr_1.5fr] md:grid-cols-2 lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-0">
                            <div className=" border border-[#efefef]">
                                <img className="border border-[#efefef] w-full" src={product?.image[0]} alt="" />

                            </div>
                            <div className="ms-5 flex flex-col items-start gap-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-[#232323] mb-2.5">{product?.title}</h2>
                                    <div className="flex items-center gap-2">
                                        <p className="text-lg font-semibold mb-2 text-[#232323]">{product?.price}</p>
                                        <p className="text-lg font-normal mb-2 text-[#666666] line-through">{product?.offerPrice}</p>
                                    </div>
                                    <div className="flex items-center gap-0.5 mb-2.5">

                                        {
                                            product.rating.map((rating, i) => (
                                                <div key={i} className="text-yellow-400">{rating}</div>
                                            ))
                                        }
                                    </div>
                                    <div className="mb-5">
                                        <h6 className="text-[#232323] font-semibold mb-2">Quantity</h6>
                                        <div className="flex items-center">
                                            <button onClick={() => handleDecrement(product.id)} className="flex items-center justify-center h-10 w-10 bg-white text-[#232323] border-1 border-[#e9e9e9] text-3xl">-</button>
                                            <button className="flex items-center justify-center h-10 w-10 bg-white text-[#232323] border-1 border-[#e9e9e9]">{product?.count}</button>
                                            <button onClick={() => handleIncreament(product.id)} className="flex items-center justify-center h-10 w-10 bg-white text-[#232323] border-1 border-[#e9e9e9]">+</button>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-medium text-[#787878]">{product?.details}</p>
                                <div onClick={() => deleteProduct(product.id)}>
                                    <button className="flex items-center gap-1 py-2 px-4 bg-red-600 text-xl text-white rounded-md xl:hover:bg-transparent xl:hover:text-red-600 xl:hover:border-red-600 xl:hover:border transition-colors duration-300">
                                        <MdDelete /><p className="text-[16px]">Delete Product</p>
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))
                }

                <h2 className="text-xl font-bold flex items-center gap-1 text-[rgb(35,35,35)] mt-10">Total Amount = $
                    <p className="font-medium text-black">
                        {
                            cart.map(item => item.price * item.count).reduce((total, value) => total + value, 0)
                        }
                    </p>
                </h2>
            </div>

            {cart.length == 0 && (
                <div>
                    <h2 className="text-center text-2xl text-[#232323] font-semibold mt-10 md:mt-0">No Products Availabe in Cart</h2>
                </div>
            )}

        </div>
    )
}
