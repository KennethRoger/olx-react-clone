function QuickLinks() {
  return (
    <div className="flex justify-center gap-20 p-3 bg-[#EBEEEF]">
      <ul className="text-gray-500 text-sm flex flex-col gap-2">
        <li className="font-bold text-base text-[#002F34]">
          POPULAR LOCATIONS
        </li>
        <li>Kolkata</li>
        <li>Mumbai</li>
        <li>Chennai</li>
        <li>Pune</li>
      </ul>
      <ul className="text-gray-500 text-sm flex flex-col gap-2">
        <li className="font-bold text-base text-[#002F34]">
          TRENDING LOCATIONS
        </li>
        <li>Bhubhaneswar</li>
        <li>Hyderabad</li>
        <li>Chandigarh</li>
        <li>Nashik</li>
      </ul>
      <ul className="text-gray-500 text-sm flex flex-col gap-2">
        <li className="font-bold text-base text-[#002F34]">ABOUT US</li>
        <li>Tech@OLX</li>
      </ul>
      <ul className="text-gray-500 text-sm flex flex-col gap-2">
        <li className="font-bold text-base text-[#002F34]">OLX</li>
        <li>Blog</li>
        <li>Help</li>
        <li>Sitemap</li>
        <li>Legal & Privacy information</li>
        <li>Vulnerability Disclosure Program</li>
      </ul>
      <div>
        <p className="font-bold text-base text-[#002F34]">FOLLOW US</p>
        <div className="flex gap-2 mt-3">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
