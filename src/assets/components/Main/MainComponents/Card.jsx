import cardPlaceholder from "../../../stocks/images/cardplaceholder.png";

function Card() {
  return (
    <div className="flex border-2 justify-center p-2 max-w-72 cursor-pointer">
      <div className="relative">
        <div className="relative">
          <img src={cardPlaceholder} className="w-72 h-44 mb-5" />
          <p className="absolute left-1 bottom-[-10px] text-xs bg-yellow-400 p-1 rounded-xl">
            FEATURED
          </p>
        </div>
        <i className="fa-regular fa-heart bg-white p-2 rounded-full absolute top-3 right-3"></i>
        <p className="">&#8377; 99999</p>
        <p>Optional vehicle dist</p>
        <p>XYZ location</p>
        <p className="absolute right-2 bottom-0">date</p>
      </div>
    </div>
  );
}

export default Card;
