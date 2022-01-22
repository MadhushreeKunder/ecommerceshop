import { useProduct } from "../../contexts/productContext";
import { useReducer } from "react";

export function Filters() {
  const {
    sortBy,
    filteredData,
    rating,
    status,
    dispatch,
    showInventoryAll,
    showFastDeliveryOnly,
  } = useProduct();

  return (
    <>
      <h1>Filters</h1>
      <fieldset>
        <legend>Sort By</legend>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          ></input>
          Price - High to low{" "}
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          ></input>{" "}
          Price- Low to High
        </label>
      </fieldset>

      <fieldset style={{ marginTop: "1rem" }}>
        <legend> Filters </legend>
        <label>
          <input
            type="checkbox"
            checked={showInventoryAll}
            onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
          />{" "}
          Include Out of Stock
        </label>
        <label>
          <input
            type="checkbox"
            checked={showFastDeliveryOnly}
            onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
          />
          Fast Delivery Only
        </label>
      </fieldset>
    </>
  );
}
