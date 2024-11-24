
const ProductCard = (props) => {
    const {item} = props
    // console.log(item)
  return (

    <>
        <div className="h-[400px] bg-gray-600 rounded-lg">
            <img src={item.image} alt="" />
        </div>
    </>
  )
}

export default ProductCard