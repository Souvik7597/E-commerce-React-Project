import categoryImage from "../images/categorybanner.webp"

export default function FurnitureDetailsPage({title}) {
  return (
    <div>
      <h2 className="text-2xl text-[#232323] mb-2.5 font-semibold">{title}</h2>

      <p className="text-sm text-[#787878] mb-5">Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>

      <p className="text-sm text-[#787878] mb-5">Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer! Accessorize with a straw hat and you're ready for summer! Accessorize with a straw hat and you're ready for summer!...</p>

      <img className="w-full" src={categoryImage} alt="" />
    </div>
  )
}
