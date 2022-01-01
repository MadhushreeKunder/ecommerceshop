import { createContext, useContext, useState } from "react";

export const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [itemsInWishList, setItemsInWishList] = useState([]);
  const [toggleHeart, setToggleHeart] = useState("white");
  return (
    <WishListContext.Provider value={{ itemsInWishList, setItemsInWishList, toggleHeart, setToggleHeart }}>
      {children}
    </WishListContext.Provider>
  );
}

export function useWishList() {
  return useContext(WishListContext);
}
