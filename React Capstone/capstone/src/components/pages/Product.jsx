import { useEffect, useState } from "react";

import ProductCard from "../custom-components/ProductCard";

export default function Product(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
      });
  }, [props.match.params]);

  return (
    <div className="product-page-container">
      <ProductCard
        key={product.id}
        productInfo={product}
        productPage={true}
        onProduct={true}
      />
    </div>
  );
}
