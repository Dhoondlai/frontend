import { BrowserRouter, Routes, Route } from "react-router-dom";
import DhoondlaiLanding from "./components/DhoondlaiLanding";
import ProductDetailPage from "./components/product-detail-page";
import VendorStatusPage from "./components/product-status-page";
import ContributePage from "./components/contribute-page";
import PrivacyPolicy from "./components/privacy-policy";
import TermsOfService from "./components/terms-of-service";
import AllProductsPage from "./components/all-products-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DhoondlaiLanding />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/vendor-status" element={<VendorStatusPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/products" element={<AllProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
