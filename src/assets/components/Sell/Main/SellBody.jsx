import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../App";
import { db, storage } from "../../../../firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function SellBody() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !price || !phoneNumber || !location || !description || !image) {
      alert("Please fill all the fields");
      return;
    }

    try {
      setLoading(true);

      const storageRef = ref(storage, `products/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.log("Error uploading file:", error);
          setLoading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, "products"), {
            productName,
            price,
            phoneNumber,
            location,
            description,
            imageURL: downloadURL,
            createdAt: Timestamp.now(),
            userName: user.displayName,
          });
          setLoading(false);
          alert("Product added successfully");
          navigate("/");
        }
      );
    } catch (error) {
      console.log("Error while adding product", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-red-600" role="status">
          </div>
          <p className="text-white mt-4">Uploading your product...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="shadow-md p-5">
        <Link to={-1}>
          <i className="fa-solid fa-arrow-left text-2xl cursor-pointer"></i>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mt-5 mb-5">
        <h1 className="text-4xl">POST YOUR AD</h1>
        <div className="min-w-[700px] border border-gray-300 rounded-md p-5 mt-5">
          <form className="max-w-[60%]" onSubmit={handleSubmit}>
            <div className="form-component-space">
              <label htmlFor="productName" className="text-xl">Product Name</label>
              <input
                type="text"
                className="form-component-style"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              ></input>
            </div>
            <div className="form-component-space">
              <label htmlFor="price" className="text-xl">Price</label>
              <div className="relative">
                <p className="absolute left-2 top-3">&#8377;</p>
                <input
                  type="number"
                  className="form-component-style !pl-8 w-full"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-component-space">
              <label htmlFor="phoneNumber" className="text-xl">Phone Number</label>
              <input
                type="number"
                className="form-component-style"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
            </div>
            <div className="form-component-space">
              <label htmlFor="location" className="text-xl">Location</label>
              <input
                type="text"
                className="form-component-style"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></input>
            </div>
            <div className="form-component-space">
              <label htmlFor="description" className="text-xl">Description</label>
              <textarea
                className="form-component-style min-h-52"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-component-space">
              <label htmlFor="picture" className="text-xl">Upload a Picture</label>
              <div className="mb-10 relative w-40 h-40 border border-black rounded-lg flex items-center justify-center">
                <input
                  type="file"
                  name="image"
                  className="absolute opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="absolute w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <i className="fa-solid fa-camera text-4xl text-gray-500"></i>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-3 border rounded-lg border-black text-white bg-[#002F34]"
            >
              Post now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SellBody;
