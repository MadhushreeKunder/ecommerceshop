import { useCart, useWishList } from "../contexts";

export function CartHeader() {
  const { itemsInCart } = useCart();
  const { itemsInWishList } = useWishList();
  return (
    <>
      <p>No. of cart items: {itemsInCart.length}</p>
      <p>No. of wishlist items: {itemsInWishList.length}</p>


    </>
  );
}
