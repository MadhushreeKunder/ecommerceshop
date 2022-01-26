// import React from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../data";
// import { useCart, useWishList } from "../contexts";

// export function ProductDetail() {
//   const { productId } = useParams();

//   console.log({ productId });
//   const {
//     item,
//     name,
//     brand,
//     description,
//     img,
//     price,
//     oldprice,
//     discount,
//     rating,
//     star,
//     id,
//     quantity,
//   } = products.find((product) => product.id === Number(productId));

//   const { itemsInCart, setItemsInCart } = useCart();
//   const { itemsInWishList, setItemsInWishList } = useWishList();

//   //   const addToCart = (product) => {
//   //     const itemExists = itemsInCart.find((item) => product.name === item.name);
//   //     if (!itemExists) {
//   //       setItemsInCart([...itemsInCart, { ...product, quantity: 1 }]);
//   //     }
//   //   };

//   //   const addToWishList = (product) => {
//   //     const itemExists = itemsInWishList.find(
//   //       (item) => product.name === item.name
//   //     );
//   //     if (!itemExists) {
//   //       setItemsInWishList([...itemsInWishList, product]);
//   //       // setToggleHeart("red");
//   //     }
//   //   };

//   return (
//     <div className="container product-detail-flex">
//       <div className=" pd product-detail-img">
//         <img src={img} />
//       </div>
//       <div className="pd product-detail-info">
//         <h1> {brand} </h1>
//         <h2 className="product-detail-name">{name}</h2>
//         <h2> Rs. {price}</h2>
//         <span className="product-detail-old-price"> Rs. {oldprice}</span>
//         <span className="product-detail-discount"> ({discount}% OFF)</span>
//         <p className="product-description">{description}</p>
//         <div className="flex">
//           <button
//             //   onClick={() => addToCart(item)}
//             className="button button-primary"
//           >
//             Add to Cart
//           </button>
//           {"  "}
//           <button
//             // onClick={() => addToWishList(item)}
//             className="button button-secondary"
//           >
//             Move to WishList
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
