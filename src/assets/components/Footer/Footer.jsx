import React from "react";
import PhoneAppPromotion from "./FooterComponents/PhoneAppPromotion";
import QuickLinks from "./FooterComponents/QuickLinks";
import PartnerSection from "./FooterComponents/PartnerSection";

function Footer() {
  return (
    <footer>
      <PhoneAppPromotion />
      <QuickLinks />
      <PartnerSection />
    </footer>
  );
}

export default Footer;
