import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PreNavbar from "./components/PreNavbar";
import Slider from "./components/Slider/Slider";
import Offer from "./components/Offer";
import Brack from "./components/BreckLine";
import StarProducts from "./components/StarProducts";
import HotAccesseries from "./components/Hot-Accessories/HotAccesseries";
import ProductReview from "./components/ProductReview";
import Videos from "./components/Videos";
import Slidersecound from "./components/Slider/Slider-secound";
import Prefooter from "./components/prefooter/Prefooter";
import Prefooter2 from "./components/prefooter/Prefooter2";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <PreNavbar />
      <Navbar />
      <Slider />
      <Offer />
      <Brack name="Star Product" />
      <StarProducts />
      <Brack name="HOT ACCESSORIES" />
      <HotAccesseries />
      <Brack name="product reviews" />
      <ProductReview />
      <Brack name="videos" />
      <Videos />
      <Brack name="in the pass" />
      <Slidersecound />
      <Prefooter />
      <Prefooter2 />
      <Footer />
    </div>
  );
}

export default App;
