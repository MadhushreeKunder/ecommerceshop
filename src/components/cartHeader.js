import { useCart } from "../contexts";

export function CartHeader() {
  const { itemsInCart } = useCart();
  return <p>No. of cart items: {itemsInCart.length}</p>;
}
