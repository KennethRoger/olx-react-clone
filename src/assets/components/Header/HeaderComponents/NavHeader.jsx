function NavHeader() {
  return (
    <div className="pt-20">
      <nav className="border-t-2 border-t-[#EFF1F1] border-b-2 border-b-[#EFF1F1]">
        <ul className="flex justify-center items-center gap-4 cursor-pointer text-[#002F34] p-2">
          <li className="flex items-center gap-2">
            <p>ALL CATERGORIES</p>
            <i className="fa-solid fa-angle-down right-3 text-2xl"></i>
          </li>
          <li>Cars</li>
          <li>Motorcycles</li>
          <li>Mobile Phones</li>
          <li>For Sale: House & Apartments</li>
          <li>Scooters</li>
          <li>Commercial & Other Vehicles</li>
          <li>For Rent: Houses & Apartments</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavHeader;
