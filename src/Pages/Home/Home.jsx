import Banner from "./Banner";
import About from "./About";
import Features from "./Features";
import App from "./App";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="bg-white">
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Features></Features>
      <App></App>
      <Footer></Footer>
    </div>
  );
};

export default Home;
