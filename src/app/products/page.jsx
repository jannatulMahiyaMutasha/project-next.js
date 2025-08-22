import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Products</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((p) => (
          <li key={p.id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
            <h2>{p.name}</h2>
            <p>${p.price}</p>
            <Link href={`/products/${p.id}`}>
              <button style={{ padding: "0.5rem 1rem", marginTop: "0.5rem", cursor: "pointer" }}>
                Details
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
