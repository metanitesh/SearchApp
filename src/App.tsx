import { useEffect, useState } from "react";
import Search from "./components/search";
import { Product } from "./interfaces/Product";
import ProductList from "./components/productList";
import ProductImages from "./components/productImages";
import { useQuery } from "react-query";
import useProductSearchQuery from "./queries/useProductSearch";

function App() {
  const [fetchSearch, setFetchSearch] = useState("");
  const [productImage, setProductImage] = useState<string[]>();

  const {
    data: ProductSearchResult,
    isLoading,
    error,
  } = useProductSearchQuery(fetchSearch);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <>
      <h1>App</h1>
      <Search setFetchSearch={setFetchSearch} />
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
