import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Microscopio", stock: 5 },
  { id: 2, name: "Proyector", stock: 2 }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const { name, stock } = req.body;
  const newProduct = { id: Date.now(), name, stock };
  products.push(newProduct);
  res.json(newProduct);
});

app.listen(3000, () => console.log("API corriendo en puerto 3000"));
