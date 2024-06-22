import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleRemove = (bookId) => {
    console.log("bookIddd", bookId);
    dispatch(removeFromCart(bookId));
  };

  console.log("carttt", cart);

  return (
    <div>
      <div>Cart: </div>
      {cart.map((item, index) => (
        <li key={index}>
          {item.title} - {item.price}
          <button onClick={() => handleRemove(item.id)}>
            Remove from Cart
          </button>
        </li>
      ))}
    </div>
  );
};

export default Cart;
