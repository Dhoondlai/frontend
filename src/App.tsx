import { BrowserRouter, Routes, Route } from "react-router-dom";
import DhoondlaiLanding from "./components/DhoondlaiLanding";
import ProductDetailPage from "./components/product-detail-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DhoondlaiLanding />} />
        <Route path="/product" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
