
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./components/ProductCard";
import { Placeholder } from "react-bootstrap";
import PlaceholderCard from "./components/PlaceholderCard";
import NotFoundPage from "./pages/NotFoundPage";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import UserSignUpModal from "./components/UserSignUpModal";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <h1> Hello Everyone! Let's have some fun with reacjs</h1>
      <HomePage />
    </div>
  );
}

export default App;
