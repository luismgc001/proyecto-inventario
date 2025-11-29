import { useContext, useEffect } from "react";
import { InventoryContext } from "../context/InventoryContext";
import { fetchProducts } from "../api/products";

export default function ProductsPage() {
  const { products, setProducts } = useContext(InventoryContext);

  useEffect(() => {
    fetchProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Inventario</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} — Stock: {p.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}
