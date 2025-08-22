import { products } from "@/lib/products";

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p style={{ fontWeight: "bold" }}>${product.price}</p>
    </div>
  );
}
