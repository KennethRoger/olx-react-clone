import profileIcon from "../../../../stocks/images/profile-icon.png";
import logoIcon from "../../../../stocks/images/OLX-Symbol.png";
import loginGuitarImg from "../../../../stocks/images/login-guitar.webp";
import googleIcon from "../../../../stocks/images/google-icon.png";
import SignInModal from "./SignInModal";
import { UserContext } from "../../../../../App";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function MainHeader() {
  const [viewProfile, setViewProfile] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { user, handleGoogleSignIn, handleLogout } = useContext(UserContext);

  const navigate = useNavigate();

  // Profile options
  const showProfile = () => {
    setViewProfile(!viewProfile);
  };

  // Modal visualization
  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleSellClick = () => {
    if (user) {
      navigate("/sell");
    } else {
      openModal();
    }
  };

  useEffect(() => {
    setIsModalVisible(false);
  }, [user]);

  return (
    <>
      <nav className="flex justify-between fixed z-10 w-full p-2 bg-olxnav items-center gap-6">
        <Link to={"/"}>
          <img src={logoIcon} width={"45px"} className="cursor-pointer" />
        </Link>
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
        <div className="flex justify-center items-center gap-2 cursor-pointer text-[#002F34]">
          <p>ENGLISH</p>
          <i className="fa-solid fa-angle-down right-3 cursor-pointer text-2xl"></i>
        </div>
        {/* Contents from here change based on user authentication */}
        {user ? (
          <>
            <i className="fa-brands fa-rocketchat text-xl text-[#002F34]"></i>
            <i className="fa-regular fa-bell text-xl text-[#002F34]"></i>
            <div
              className="flex justify-center items-center gap-2 text-[#002F34] relative"
              onClick={showProfile}
            >
              <img
                src={profileIcon}
                width={"40px"}
                className="rounded-full cursor-pointer "
              />
              <i className="fa-solid fa-angle-down right-3 cursor-pointer text-2xl"></i>
              {viewProfile ? (
                <div className="absolute top-12 right-[-5px] w-[300px] bg-white shadow-md">
                  <div className="absolute right-0 top-[-15px] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-white "></div>
                  <div className="p-5">
                    <div className="flex items-center justify-around mb-8">
                      <img
                        src={profileIcon}
                        width={"60px"}
                        className="rounded-full"
                      />
                      <p className="font-bold text-2xl">
                        {user.displayName || "Guest"}
                      </p>
                    </div>
                    <button className="p-3 w-full bg-[#002F34] text-white">
                      View and edit profile
                    </button>
                  </div>
                  <hr className="w-full mt-5 mb-5" />
                  <div className="flex items-center gap-3 text-xl pt-3 pb-3 cursor-pointer hover:bg-cyan-200 ps-5">
                    <i className="fa-solid fa-gear"></i>
                    <p>Settings</p>
                  </div>
                  <div
                    className="flex items-center gap-3 text-xl pt-3 pb-3 cursor-pointer hover:bg-cyan-200 p-5"
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <p>Logout</p>
                  </div>
                </div>
              ) : null}
            </div>
          </>
        ) : (
          <p
            className="text-md font-bold underline cursor-pointer"
            onClick={openModal}
          >
            Login
          </p>
        )}
        {/* Sign in Modal */}
        <SignInModal isVisible={isModalVisible} onClose={closeModal}>
          <div className="flex flex-col justify-center items-center gap-8">
            <img src={loginGuitarImg} alt="A guitar image" width={"150px"} />
            <p className="text-center">
              Help us become one of the safest places to buy and sell
            </p>
            <div className="w-full">
              <button
                className="p-2 flex justify-center items-center gap-3 border rounded-lg w-full hover:bg-gray-200"
                onClick={handleGoogleSignIn}
              >
                <img src={googleIcon} alt="Google icon" width={"30px"} />
                Sign in with Google
              </button>
            </div>
          </div>
        </SignInModal>
        <button
          className="flex justify-center items-center h-14 w-24 gap-2 text-[#002F34] shadow-lg bg-white rounded-full p-2 border-8 border-t-cyan-400 border-l-yellow-400 border-r-blue-600 border-b-cyan-400"
          onClick={handleSellClick}
        >
          <i className="fa-solid fa-plus"></i>
          SELL
        </button>
      </nav>
    </>
  );
}

export default MainHeader;
