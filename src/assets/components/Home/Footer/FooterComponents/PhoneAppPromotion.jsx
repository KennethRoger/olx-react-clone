import React from "react";
import phoneAppImg from "../../../../stocks/images/phone-app.webp";
import appStoreImg from "../../../../stocks/images/appstore.webp";
import playStoreImg from "../../../../stocks/images/playstore.webp";

function PhoneAppPromotion() {
  return (
    <div className="flex justify-center items-center gap-10 bg-[#F7F8F8] ">
      <img src={phoneAppImg} alt="olx mobile image" />
      <div className="max-w-96 border-r-2 border-zinc-300">
        <h1 className="text-4xl font-bold">TRY THE OLX APP</h1>
        <p>
          Buy, sell and find just about anything using the app on your mobile.
        </p>
      </div>
      <div>
        <p className="text-sm font-bold">GET YOUR APP TODAY</p>
        <div className="flex gap-3 mt-3">
          <img
            src={appStoreImg}
            alt="apple download prompt image"
            className="cursor-pointer"
          />
          <img src={playStoreImg} alt="playstore download prompt image" />
        </div>
      </div>
    </div>
  );
}

export default PhoneAppPromotion;
