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
        const response = await axios.get(
         `${backendURL}/products`
        );
        const productsData = response.data.products;
        dispatch({ type: "ADD_DATA", payload: productsData });
        dispatch({
          type: "STATUS",
          payload: { loading: "loading.." },
        });
      } catch (error) {
        console.error(error);
        dispatch({
          type: "STATUS",
          payload: { loading: "Try again later..." },
        });
      }
    })();
  }, []);

  const [
    {
      productsData,
      status,
      sortBy,
      showInventoryAll,
      showFastDeliveryOnly,
      rating,
    },
    dispatch,
  ] = useReducer(filterReducer, {
    productsData: [],
    status: { loading: "", success: "", error: "" },
    ratings: 5,
    sortBy: null,
    showInventoryAll: true,
    showFastDeliveryOnly: false,
  });

  const sortedData = getSortedData(productsData, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showInventoryAll,
    showFastDeliveryOnly,
  });

  return (
    <ProductContext.Provider
      value={{
        sortBy,
        filteredData,
        rating,
        status,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
