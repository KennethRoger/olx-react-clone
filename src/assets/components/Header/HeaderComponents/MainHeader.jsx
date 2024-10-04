import profileIcon from "../../../stocks/images/profile-icon.png";
import logoIcon from "../../../stocks/images/OLX-Symbol.png";

function MainHeader() {
  return (
    <>
      <nav className="flex justify-between fixed z-10 w-full p-2 bg-olxnav items-center gap-6">
        <h1 className="text-2xl font-bold cursor-pointer">
          <img src={logoIcon} width={"45px"} />
        </h1>
        <div className="relative flex items-center text-[#002F34]">
          <input
            className="p-2 ps-10 border-2 border-[#002F34] rounded-md focus:border-[#00fff6]"
            type="text"
            name="locSearch"
            placeholder="Search city, area or loc..."
          />
          <i className="fa-solid fa-magnifying-glass absolute left-2"></i>
          <i className="fa-solid fa-angle-down absolute right-3 cursor-pointer text-2xl"></i>
        </div>
        <div className="flex justify-center items-center flex-1">
          <input
            className="p-2 ps-2 border-2 border-[#002F34] flex-1 rounded-l-md focus:border-[#00fff6]"
            type="text"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <div className="bg-[#002F34] h-[44px] p-4 rounded-r-md flex justify-center items-center cursor-pointer">
            <i className="fa-solid fa-magnifying-glass text-white text-xl"></i>
          </div>
        </div>
        {/* Contents from here change based on user authentication */}
        <div className="flex justify-center items-center gap-2 cursor-pointer text-[#002F34]">
          <p>ENGLISH</p>
          <i className="fa-solid fa-angle-down right-3 cursor-pointer text-2xl"></i>
        </div>
        <i className="fa-brands fa-rocketchat text-xl text-[#002F34]"></i>
        <i className="fa-regular fa-bell text-xl text-[#002F34]"></i>
        <div className="flex justify-center items-center gap-2 text-[#002F34]">
          <img src={profileIcon} width={"40px"} className="rounded-2xl" />
          <i className="fa-solid fa-angle-down right-3 cursor-pointer text-2xl"></i>
        </div>
        <button className="flex justify-center items-center h-14 w-24 gap-2 text-[#002F34] bg-white rounded-full p-2 border-8 border-t-cyan-400 border-l-yellow-400 border-r-blue-600 border-b-cyan-400">
          <i className="fa-solid fa-plus"></i>
          <p>SELL</p>
        </button>
      </nav>
    </>
  );
}

export default MainHeader;
