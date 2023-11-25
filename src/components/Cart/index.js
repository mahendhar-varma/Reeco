import { Div, Head, Para, Image } from "./styledComponent";

const Cart = () => {
  return (
    <Div>
      <Head>Cart</Head>
      <Para>Your cart is empty</Para>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        alt="no data"
      />
    </Div>
  );
};

export default Cart;
