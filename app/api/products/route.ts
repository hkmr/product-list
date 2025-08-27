import { ProductType } from "@/@types/ProductType";
import { NextResponse } from "next/server";

const products: ProductType[] = [
  {
    id: 1,
    title: "Premium Headphones",
    description: "High-quality sound with noise cancellation technology.",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    inStock: true,
    onSale: true,
    category: "electronics",
    rating: 4.8,
    reviews: 1234,
    tags: ["audio", "premium", "wireless"],
  },
  {
    id: 2,
    title: "Smart Watch",
    description:
      "Track your health and fitness with advanced sensors and GPS functionality.",
    price: 149.99,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    inStock: false,
    onSale: false,
    category: "electronics",
    rating: 4.6,
    reviews: 892,
    tags: ["health", "fitness", "smartwatch"],
  },
  {
    id: 3,
    title: "Laptop",
    description: "Powerful gaming laptop with a wide selection of games and accessories.",
    price: 999.99,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    inStock: true,
    onSale: true,
    category: "electronics",
    rating: 4.8,
    reviews: 789,
    tags: ["gaming", "laptop", "powerful"],
  },
  {
    id: 4,
    title: "Gaming Console",
    description:
      "Powerful gaming console with a wide selection of games and accessories.",
    price: 499.99,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    inStock: true,
    onSale: true,
    category: "electronics",
    rating: 4.8,
    reviews: 789,
    tags: ["gaming", "console", "powerful"],
  },
  {
    id: 5,
    title: "Wireless Bluetooth Speaker",
    description:
      "Compact wireless speaker with high-quality sound and long battery life.",
    price: 149.99,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    inStock: true,
    onSale: false,
    category: "electronics",
    rating: 4.7,
    reviews: 321,
    tags: ["wireless", "speaker", "compact"],
  },
  {
    id: 6,
    title: "Portable Bluetooth Speaker",
    description:
      "Compact wireless speaker with high-quality sound and long battery life.",
    price: 129.99,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    inStock: true,
    onSale: false,
    category: "electronics",
    rating: 4.6,
    reviews: 987,
    tags: ["wireless", "speaker", "compact"],
  },
];

export async function GET() {
  return NextResponse.json({ products });
}