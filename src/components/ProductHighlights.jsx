"use client";

import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductHighlights() {
  return (
    <section className="highlights">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              {/* Placeholder image */}
              <img
                src={`https://source.unsplash.com/300x200/?${product.name}`}
                alt={product.name}
              />
            </div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link href={`/products/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .highlights {
          padding: 3rem 1rem;
          background: #f5f5f5;
          text-align: center;
        }
        .highlights h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #333;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .product-card {
          background: black;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }
        .product-image img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        .product-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .product-card p {
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .product-card button {
          padding: 0.5rem 1rem;
          background: #2575fc;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .product-card button:hover {
          background: #0053ba;
        }
        @media (max-width: 768px) {
          .highlights h2 {
            font-size: 2rem;
          }
          .product-image img {
            height: 120px;
          }
        }
      `}</style>
    </section>
  );
}
