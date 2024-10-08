import cardPlaceholder from "../../../../stocks/images/cardplaceholder.png";
import { useNavigate } from "react-router-dom";

function Card({ productName, price, location, createdAt, imageURL, id }) {
  const navigate = useNavigate();
  const formattedDate = createdAt.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  });

  const handleCardClick = () => {
    navigate(`product/${id}`);
  };

  return (
    <div
      className="flex border-2 justify-center p-2 max-w-72 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img src={imageURL || cardPlaceholder} className="w-72 h-44 mb-5" />
        <i className="fa-regular fa-heart bg-white p-2 rounded-full absolute top-3 right-3"></i>
        <p>{productName}</p>
        <p className="">&#8377; {price}</p>
        <p>{location}</p>
        <p className="absolute right-2 bottom-0">{formattedDate}</p>
      </div>
    </div>
  );
}

export default Card;
