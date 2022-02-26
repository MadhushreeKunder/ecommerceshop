import { useProduct } from "../../contexts/productContext";

export function Filters() {
  const { sortBy, dispatch, showInventoryAll, showFastDeliveryOnly } =
    useProduct();

  return (
    <>
      <h2>Filters</h2>
      <fieldset className="fieldset">
        <legend className="legend">Sort By Price</legend>
        <label className="label">
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          ></input>{" "}
          Price: High to low{" "}
        </label>
        <br />
        <label className="label">
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          ></input>{" "}
          Price: Low to High
        </label>
      </fieldset>

      <fieldset className="fieldset">
        <legend className="legend"> Filters </legend>
        <label className="label">
          <input
            type="checkbox"
            checked={showInventoryAll}
            onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
          />{" "}
          Include Out of Stock
        </label>
        <br />
        <label className="label">
          <input
            type="checkbox"
            checked={showFastDeliveryOnly}
            onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
          />{" "}
          Fast Delivery Only
        </label>
      </fieldset>

      <button
        className="button"
        onClick={() => {
          dispatch({ type: "CLEAR_FILTERS" });
        }}
      >
        Clear Filters
      </button>
    </>
  );
}
