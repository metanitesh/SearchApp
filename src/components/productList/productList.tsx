import React from "react";
import { Product } from "../../interfaces/Product";

type ProductListProps = {
  products: Product[];
  handleImageUpdate: (product: string[]) => void;
};

export default function ProductList({
  products,
  handleImageUpdate,
}: ProductListProps) {
  return (
    <ul>
      {products?.length
        ? products.map((product: any) => {
            return (
              <li
                key={product.id}
                onClick={() => handleImageUpdate(product.images)}
              >
                {product.title}
              </li>
            );
          })
        : ""}
    </ul>
  );
}
