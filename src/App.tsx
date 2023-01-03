import { useEffect, useState } from "react";
import Search from "./components/search";
import { Product } from "./interfaces/Product";
import ProductList from "./components/productList";
import ProductImages from "./components/productImages";
import { useQuery } from "react-query";
import useProductSearchQuery from "./queries/useProductSearch";
import { useStore } from "./store";

function App() {
  const [productImage, setProductImage] = useState<string[]>();
  const { searchQuery, setSearchQuery } = useStore();
  const {
    data: ProductSearchResult,
    isLoading,
    error,
  } = useProductSearchQuery(searchQuery);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <>
      <h1>App</h1>
      <Search />
      {ProductSearchResult?.products && (
        <ProductList
          products={ProductSearchResult.products}
          handleImageUpdate={setProductImage}
        />
      )}
      {productImage?.length && <ProductImages productImages={productImage} />}
    </>
  );
}

export default App;
