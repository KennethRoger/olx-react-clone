import carTradeLogo from "../../../../stocks/images/partners/cartrade_tech.svg";
import olxLogo from "../../../../stocks/images/partners/olx.svg";
import carWaleLogo from "../../../../stocks/images/partners/carwale.svg";
import bikeWalaLogo from "../../../../stocks/images/partners/bikewale.svg";
import carTradeLogo2 from "../../../../stocks/images/partners/cartrade.svg";
import mobilityOutlookLogo from "../../../../stocks/images/partners/mobility.svg";

function PartnerSection() {
  return (
    <div className="bg-[#002F34] p-7">
      <div className="flex justify-center items-center gap-16">
        <img src={carTradeLogo} width={"200px"} className="border-r-2 pe-5"/>
        <img src={olxLogo} width={"60px"} />
        <img src={carWaleLogo} width={"100px"} />
        <img src={bikeWalaLogo} width={"100px"} />
        <img src={carTradeLogo2} width={"100px"} />
        <img src={mobilityOutlookLogo} width={"100px"} />
      </div>
      <div className="text-white flex justify-evenly gap-80 mt-5">
        <p>Help-sitemap</p>
        <p>All rights reserved &copy; </p>
      </div>
    </div>
  );
}

export default PartnerSection;
