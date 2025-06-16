
import { MdDelete } from "react-icons/md";

export default function Cart({ cartAllProduct, setCartAllProduct }) {

    const handleIncreament = (id) => {
        setCartAllProduct((prevCart) =>
            prevCart.map((item) =>
                item?.id == id ? { ...item, count: item?.count + 1 } : item
            )
        );
    }
    const handleDecrement = (id) => {
        setCartAllProduct((prevCart) =>
          prevCart.map((item) =>
            item?.id === id && item.count > 1
              ? { ...item, count: item?.count - 1 }
              : item
          )
        );
      };
    const deleteProduct = (id) => {
        setCartAllProduct(cartAllProduct?.filter((item) => item?.id !== id));
    }

    return (
        <div className="container-width py-12">
            {
                cartAllProduct.map((product) => (
                    <div key={product.id} className="border border-[#efefef] grid grid-cols-2 mb-5">
                        <div className="flex items-start gap-10 border border-[#efefef]">
                            <img className="border border-[#efefef]" width={200} src={product?.image} alt="" />
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
                                        <button onClick={() => handleDecrement(product?.id)} className="flex items-center justify-center h-10 w-10 bg-white text-[#232323] border-1 border-[#e9e9e9] text-3xl">-</button>
                                        <button className="flex items-center justify-center h-10 w-10 bg-white text-[#232323] border-1 border-[#e9e9e9]">{product?.count}</button>
                                        <button onClick={() => handleIncreament(product?.id)} className="flex items-center justify-center h-10 w-10 bg-white text-[#232323] border-1 border-[#e9e9e9]">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-5 flex items-start gap-4">
                            <p className="font-medium text-[#787878]">{product?.details}</p>
                            <div onClick={() => deleteProduct(product?.id)} className="text-2xl text-red-600">
                            <MdDelete />
                            </div>
                        </div>

                    </div>
                ))
            }

            {cartAllProduct.length == 0 && (
                <div>
                    <h2 className="text-center text-2xl text-[#232323] font-semibold">No Products Availabe in Cart</h2>
                </div>
            )}

        </div>
    )
}
