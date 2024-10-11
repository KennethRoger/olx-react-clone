import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { db } from "../../../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { SearchContext } from "../../Home";

function CardContainer() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { searchQuery } = useContext(SearchContext);

  const fetchProducts = async () => {
    try {
      const productsCollection = collection(db, "products");
      const productsSnapshots = await getDocs(productsCollection);
      const productList = productsSnapshots.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
      }));
      setProducts(productList);
    } catch (err) {
      console.error("Error fetching products: ", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const regex = new RegExp(searchQuery, "i");
      const filtered = products.filter((product) =>
        regex.test(product.productName)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <>
      <div>
        <h1 className="text-2xl pt-3 pb-3">Fresh recommendations</h1>
        <div className="grid grid-cols-4 gap-y-8 justify-center mb-20">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              productName={product.productName}
              price={product.price}
              location={product.location}
              createdAt={product.createdAt}
              imageURL={product.imageURL}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardContainer;
