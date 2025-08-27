import { useEffect, useState } from "react";
import { ProductType } from "@/@types/ProductType";
import ProductCard from "@/components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/products");
        const data = await response.json();

        if (data?.products) {
          setProducts(data?.products);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {isLoading && (
          <div className="col-span-4">
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white "></div>
              <div>...Loading</div>
            </div>
          </div>
        )}
        {!isLoading &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={(product) => {}}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
