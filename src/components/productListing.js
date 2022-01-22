import { useCart, useWishList, useProduct } from "../contexts";
import { Link } from "react-router-dom";
// import { products } from "../data";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";

export function ProductListing() {
  const { itemsInCart, setItemsInCart } = useCart();
  const { itemsInWishList, setItemsInWishList } = useWishList();
  // const { toggleHeartRed, setToggleHeartRed } = useWishList();
  const [loader, setLoader] = useState(false);

  const { productsData, setProductsData } = useProduct();

  const addToCart = (product) => {
    const itemExists = itemsInCart.find((item) => product.name === item.name);
    if (!itemExists) {
      setItemsInCart([...itemsInCart, { ...product, quantity: 1 }]);
    }
  };

  const addToWishList = (product) => {
    const itemExists = itemsInWishList.find(
      (item) => product.name === item.name
    );
    if (!itemExists) {
      setItemsInWishList([...itemsInWishList, product]);
      // setToggleHeartRed([!toggleHeartRed]);
    } else {
      setItemsInWishList(itemsInWishList.filter((item) => item !== itemExists));
      // setToggleHeartRed(toggleHeartRed);
    }
  };

  useEffect(() => {
    (async function () {
      setLoader(true);
      try {
        const response = await axios
          .get(
            "https://product-id-handler-middleware-timestamps-1.madhushreekunde.repl.co/products"
          )
          .then((response) => setProductsData(response.data.products));
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  const filterReducer = (state, action) => {
    switch (action.type) {
      case "SORT":
        return (state = { ...state, sortBy: action.payload });
      case "TOGGLE_INVENTORY":
        return (state = { ...state, showInventoryAll : !state.showInventoryAll});
      case "TOGGLE_DELIVERY":
        return (state = {...state, showFastDeliveryOnly : !state.showFastDeliveryOnly})

      default:
        return state;
    }
  };

  const [{ sortBy, showInventoryAll, showFastDeliveryOnly }, dispatch] = useReducer(filterReducer, { sortBy: null, showInventoryAll: true, showFastDeliveryOnly: false });

  const getSortedData = (productList, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    return productList;
  };

  const getFilteredData = (productList, {showInventoryAll, showFastDeliveryOnly}) => {
    return productList
    .filter(({ inStock }) => (showInventoryAll ? true : inStock))
    .filter(({ fastDelivery }) => (showFastDeliveryOnly ? fastDelivery : true))
  }


  const sortedData = getSortedData(productsData, sortBy);
  const filteredData = getFilteredData(sortedData, {showInventoryAll, showFastDeliveryOnly})

  return (
    <div className="container">
      <div></div>
      <h1>Products</h1>
      {loader && <span> Loading... </span>}

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
          />
         {" "} Include Out of Stock
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

      <div className="cards-section">
        {filteredData.map((item) => (
          <div className="card">
            {/* <Link to={`/products/${item.id}`}> */}

            <div className="card-img-rating">
              <img className={item.inStock? "card-img" : "card-img card-filter"} src={item.img} alt="" />{" "}
              {!item.inStock && <small class="card-overlay" style={{padding:0}}>Out of Stock</small> }
             
              <div className="bottom-left">
                {item.star} <span class="fa fa-star checked"> </span> |{" "}
                {item.rating}k
              </div>
            </div>
            {/* </Link> */}

            <button
              class="button card-badge-small"
              onClick={() => addToWishList(item)}
            >
              <i
                class=" fa fa-heart"
                // style={{ color: toggleHeartRed ? "red" : "white" }}
              ></i>
            </button>
            <div className="card-info">
              {/* <Link to={`/products/${item.id}`}> */}
              <div>
                <p className="card-brand">{item.brand}</p>
                <p className="card-name">{item.name}</p>
                {/* <p>{item.star} <span class="fa fa-star checked"> </span> | {item.rating}k Ratings</p> */}
                <p className="card-price">Rs.{item.price} </p>
                <span className="card-old-price"> Rs. {item.oldprice}</span>
                <span className="card-discount"> ({item.discount}% OFF)</span>
              </div>
              {/* </Link> */}

              <button
                className= {item.inStock? "button button-primary card-button" : "button card-button button-disable"}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
