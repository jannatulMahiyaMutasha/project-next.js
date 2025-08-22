export let products = [
  { id: 1, name: "Laptop", description: "A fast laptop for work and gaming", price: 1200 },
  { id: 2, name: "Phone", description: "A sleek smartphone with excellent camera", price: 800 },
  { id: 3, name: "Headphones", description: "Noise-cancelling over-ear headphones", price: 150 },
];

export function addProduct(product) {
  products.push({ ...product, id: products.length + 1 });
}
