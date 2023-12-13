import { useEffect, useState } from "react";
import ProductCard from "../custom-components/ProductCard";

export default function Products(props) {
  const [productInfo, setProductInfo] = useState([]);

  const [filter, setFilter] = useState("");
  const [orderedProducts, setOrderedProducts] = useState("");

  function sortProductAlphabetical() {
    if (orderedProducts === "alphabetical (a-z)") {
      productInfo.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
      return productInfo;
    } else {
      productInfo.sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      );
      return productInfo;
    }
  }

  function sortProductNumerical() {
    if (orderedProducts === "price (asc)") {
      const result = productInfo.sort((a, b) => a.price - b.price);
      return result;
    } else {
      const result = productInfo.sort((a, b) => b.price - a.price);
      return result;
    }
  }

  function renderProducts(products) {
    if (filter) {
      const filtered = productInfo.filter((product) =>
        product.category.includes(filter)
      );
      return filtered.map((info) => {
        return (
          <ProductCard key={info.id} productInfo={info} productPage={true} />
        );
      });
    } else if (orderedProducts === "alphabetical (a-z)") {
      const ordered = sortProductAlphabetical(productInfo);
      console.log(ordered);
      return ordered.map((info) => {
        return (
          <ProductCard key={info.id} productInfo={info} productPage={true} />
        );
      });
    } else if (orderedProducts === "alphabetical (z-a)") {
      const ordered = sortProductAlphabetical(productInfo);
      console.log(ordered);
      return ordered.map((info) => {
        return (
          <ProductCard key={info.id} productInfo={info} productPage={true} />
        );
      });
    } else if (orderedProducts === "price (asc)") {
      const ordered = sortProductNumerical(productInfo);
      return ordered.map((info) => {
        return (
          <ProductCard key={info.id} productInfo={info} productPage={true} />
        );
      });
    } else if (orderedProducts === "price (desc)") {
      const ordered = sortProductNumerical(productInfo);
      return ordered.map((info) => {
        return (
          <ProductCard key={info.id} productInfo={info} productPage={true} />
        );
      });
    } else {
      return productInfo.map((info) => {
        return (
          <ProductCard key={info.id} productInfo={info} productPage={true} />
        );
      });
    }
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        json.forEach((item) => {
          item.quantity = 1;
        });
        console.log(json);
        setProductInfo(json);
      });
  }, [orderedProducts]);

  return (
    <div className="products-page-container">
      <div className="page-title">Products page</div>
      Filters <br />
      <div className="filter-container">
        <div className="filter">
          <select
            name="product-filter"
            id=""
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">No filter</option>
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>
        <div className="order">
          <select
            name="product-order"
            id=""
            onChange={(e) => setOrderedProducts(e.target.value)}
          >
            <option value="">No order</option>
            <option value="alphabetical (a-z)">Alphabetical (a-z)</option>
            <option value="alphabetical (z-a)">Alphabetical (z-a)</option>

            <option value="price (asc)">Price (asc)</option>
            <option value="price (desc)">Price (desc)</option>
          </select>
        </div>
      </div>
      <div className="cards-wrapper">{renderProducts()}</div>
    </div>
  );
}
