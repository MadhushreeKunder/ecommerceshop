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
        const response = await axios.get("https://product-id-handler-middleware-timestamps-1.madhushreekunde.repl.co/products")
        .then((response) => setProductsData(response.data.products));
      } catch (error) {
        console.error(error);
      } finally {
        setLoader( false);
      }
    })();
  }, [])


  const filterReducer = (state, action) => {
    switch(action.type) {
      case "SORT":
        return (state = {...state, sortBy: action.payload});

        default: 
        return state;
    }
  }

  const [ {sortBy} , dispatch ] = useReducer( filterReducer, {sortBy:null} );

  const getSortedData = ( productList, sortBy) => {
    if ( sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a,b) => b["price"] - a["price"]);
    }

    if ( sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a,b) => a["price"] - b["price"]);
    }

    return productList;
  }


  const sortedData = getSortedData(productsData, sortBy);


  return (
    <div className="container">
      <div></div>
      <h1>Products</h1>
      {loader && <span> Loading... </span>}

      <fieldset>
        <legend>Sort By</legend>
        <label>
          <input 
          type = "radio"
          name = "sort"
          onChange={() => dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW"})
        }
        checked= {sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
        ></input>
        Price - High to low {" "}
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          ></input>
     {" "}     Price- Low to High
        </label>
      </fieldset>

      <div className="cards-section">
        {productsData.map((item) => (
          <div className="card">
            {/* <Link to={`/products/${item.id}`}> */}
              <div className="card-img-rating">
                <img className="card-img" src={item.img} alt="" />{" "}
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
                className="button button-primary card-button"
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
