import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import React, { useEffect, useState } from "react";

function ProductDetails({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductsDetails = async () => {
      try {
        const productDoc = doc(db, "products", id);
        const productSnapshot = await getDoc(productDoc);
        if (productSnapshot.exists()) {
          setProduct(productSnapshot.data());
        } else {
          console.log("Product does not exist");
        }
      } catch (err) {
        console.error("Error fetching product details", err);
      }
    };

    fetchProductsDetails();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <>
      <div className="flex gap-5 mt-10 mb-10">
        <div className="p-3 border">
          <img
            src={product.imageURL}
            alt={product.productName}
            className="border border-black w-[700px] h-[400px]"
          />
        </div>
        <div className="flex flex-col p-5 border">
          <div className="">
            <h1 className="font-bold text-2xl">Product Name</h1>
            <p className="text-xl mt-4">{product.productName}</p>
            <h1 className="font-bold text-2xl mt-8">Price</h1>
            <p className="text-xl mt-2">&#8377; {product.price}</p>
            <hr className="mt-5 mb-5" />
            <h1 className="font-bold text-2xl">Description</h1>
            <p className="text-xl mt-3">{product.description}</p>
            <div className="flex justify-center items-center mt-10">
              <button className="w-full border-2 p-4 border-[#002F34] hover:bg-[#002F34] hover:text-white">
                Chat with seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
