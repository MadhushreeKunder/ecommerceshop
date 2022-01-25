import { createContext, useContext, useReducer, useEffect } from "react";
import { getFilteredData, getSortedData } from "../components/dataFilter";
import { filterReducer } from "../reducers/filterReducer";
import axios from "axios";
import { backendURL } from "../utils/utils";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  useEffect(() => {
    (async function () {
      try {
        dispatch({
          type: "STATUS",
          payload: { loading: "loading data from server.." },
        });
        const response = await axios.get(`${backendURL}/products`);
        const data = response.data.products;
        dispatch({ type: "ADD_DATA", payload: data });
        dispatch({
          type: "STATUS",
          payload: { loading: "" },
        });
      } catch (error) {
        console.error(error);
        dispatch({
          type: "STATUS",
          payload: { error: "Try again later..." },
        });
      }
    })();
  }, []);

  const [
    { data, status, sortBy, showInventoryAll, showFastDeliveryOnly, ratings, productDetail },
    dispatch,
  ] = useReducer(filterReducer, {
    data: [],
    status: { loading: "", success: "", error: "" },
    ratings: 5,
    sortBy: null,
    showInventoryAll: false,
    showFastDeliveryOnly: false,
    productDetail:{}
  });

  const sortedData = getSortedData(data, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showInventoryAll,
    showFastDeliveryOnly,
  });

  return (
    <ProductContext.Provider
      value={{
        sortBy,
        filteredData,
        ratings,
        status,
        dispatch,
        productDetail
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
