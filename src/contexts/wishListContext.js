import { createContext, useContext, useState } from "react";

export const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [itemsInWishList, setItemsInWishList] = useState([]);
  const [toggleHeartRed, setToggleHeartRed] = useState(false);
  return (
    <WishListContext.Provider
      value={{
        itemsInWishList,
        setItemsInWishList,
        toggleHeartRed,
        setToggleHeartRed,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export function useWishList() {
  return useContext(WishListContext);
}
