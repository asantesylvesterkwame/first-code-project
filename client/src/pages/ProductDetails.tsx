import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  return(
    <div>
        You are in this Product's Page with ID: {productId}
    </div>
  );
};

export default ProductDetails;
