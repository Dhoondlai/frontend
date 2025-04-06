import { BrowserRouter, Routes, Route } from "react-router-dom";
import DhoondlaiLanding from "./components/DhoondlaiLanding";
import ProductDetailPage from "./components/product-detail-page";
import VendorStatusPage from "./components/product-status-page";
import ContributePage from "./components/contribute-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DhoondlaiLanding />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/vendor-status" element={<VendorStatusPage />} />
        <Route path="/contribute" element={<ContributePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
