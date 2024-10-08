import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { LoadingContext } from "../../../App";
import { useContext } from "react";
import Loading from "../Loading/Loading";

function Home() {
  const loading = useContext(LoadingContext);
  return (
    <>
      {loading?(
        <Loading />
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
