import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InventoryProvider } from "./context/InventoryContext";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <InventoryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </InventoryProvider>
  );
}

export default App;
