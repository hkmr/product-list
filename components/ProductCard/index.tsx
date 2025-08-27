import { ProductType } from "@/@types/ProductType";
import { ChevronRight, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

const ProductCard = ({
  product,
  onClick,
}: {
  product: ProductType;
  onClick: (product: ProductType) => void;
}) => {
  return (
    <div
      className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl 
                 transform hover:scale-105 transition-all duration-300 ease-out
                 w-full max-w-sm mx-auto border border-gray-200 dark:border-gray-700
                 group cursor-pointer"
      data-testid="product-card"
    >
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.onSale && (
          <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold animate-pulse shadow-lg">
            SALE
          </span>
        )}
        {!product.inStock && (
          <span className="bg-gray-500 text-white px-2 py-1 rounded-md text-xs font-semibold shadow-lg">
            OUT OF STOCK
          </span>
        )}
      </div>

      <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <Image
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110`}
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/file.svg"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star />
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <h3
          className="text-xl font-bold text-gray-800 dark:text-white text-center 
                      group-hover:text-blue-600 dark:group-hover:text-blue-400 
                      transition-colors duration-200"
        >
          {product.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        <button
          onClick={() => onClick(product)}
          disabled={!product.inStock}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 
                     flex items-center justify-center gap-2 group/btn
                     ${
                       product.inStock
                         ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                         : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                     }`}
          data-testid="view-more-button"
        >
          {product.inStock ? (
            <>
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
              <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </>
          ) : (
            <span>Out of Stock</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
