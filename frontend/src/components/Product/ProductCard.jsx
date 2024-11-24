
const ProductCard = (props) => {
    const {item} = props
  return (

    <>
        <div className="h-[400px] bg-gray-600 rounded-lg p-2 mr-5">
            <img src={item.image} alt="" />
        </div>
    </>
  )
}

export default ProductCard