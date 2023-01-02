import { useEffect, useState } from "react";
import Search from "./search";
import { Product } from "./interfaces/Product";
import ProductList from "./productList";
import ProductImages from "./productImages/productImages";
import { useQuery } from "react-query";

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

function App() {
  const [fetchSearch, setFetchSearch] = useState("");
  const [searchResults, setSearchResults] = useState<ApiResponse>();
  const [productImage, setProductImage] = useState<string[]>();

  const { isLoading, error, data } = useQuery("search-product", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );

  useEffect(() => {
    const fetchSearchFromApi = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${fetchSearch}`
        );
        const responseJson: ApiResponse = await response.json();
        console.log("responseJson", responseJson);
        setSearchResults(responseJson);
      } catch (error) {
        console.log(error);
      }
    };

    if (fetchSearch) {
      fetchSearchFromApi();
    }
  }, [fetchSearch]);

  console.log(searchResults);
  return (
    <>
      <h1>App</h1>
      <Search setFetchSearch={setFetchSearch} />
      {searchResults?.products && (
        <ProductList
          products={searchResults.products}
          handleImageUpdate={setProductImage}
        />
      )}
      {productImage?.length && <ProductImages productImages={productImage} />}
    </>
  );
}

export default App;
