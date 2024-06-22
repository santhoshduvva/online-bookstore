import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/bookActions";
import { addToCart } from "../redux/actions/cartActions";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <div>Book List:</div>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} - {book.price}
          <button onClick={() => dispatch(addToCart(book))}>Add to Cart</button>
        </li>
      ))}
    </div>
  );
};

export default BookList;
