export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice: number | null;
  image: string;
  onSale: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
  category: string;
  tags: string[];
};
