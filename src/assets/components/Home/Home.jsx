import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { LoadingContext } from "../../../App";
import { createContext, useContext, useState } from "react";
import Loading from "../Loading/Loading";

export const SearchContext = createContext();
function Home() {
  const loading = useContext(LoadingContext);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SearchContext.Provider value={{searchQuery, setSearchQuery}}>
            <Header />
            <Main />
            <Footer />
          </SearchContext.Provider>
        </>
      )}
    </>
  );
}

export default Home;
