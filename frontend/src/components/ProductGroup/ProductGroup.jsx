import { useGetAllProductsQuery } from "../../services/productsApi";
import Product from "./Product";

const ProductGroup = () => {
  const { data, isError, isLoading} = useGetAllProductsQuery();
  isError && <div>Error....</div>
  isLoading && <div>Loading....</div>
  if (!data) return <div>data not available...</div>
  return (
    <>
      <div className="flex p-10 gap-10">
        {data.map((item) => (
          <div key={item.id}>
            <Product item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGroup;
