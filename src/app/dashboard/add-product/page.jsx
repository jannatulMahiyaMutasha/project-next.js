"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { products, addProduct } from "@/lib/products";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, description, price: Number(price) });
    alert("Product added!");
    setName("");
    setPrice("");
    setDescription("");
    router.push("/products");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: "0.5rem" }}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{ padding: "0.5rem" }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ padding: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
          Add Product
        </button>
      </form>
    </div>
  );
}
