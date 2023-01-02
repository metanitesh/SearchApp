import React from "react";

type ProductImagesProps = {
  productImages: string[];
};

export default function ProductImages({ productImages }: ProductImagesProps) {
  const ui = productImages.map((img) => {
    return <img src={img}></img>;
  });
  return <>{ui}</>;
}
