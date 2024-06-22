export const FETCH_BOOKS = "FETCH_BOOKS";

export const fetchBooks = () => {
  return {
    type: FETCH_BOOKS,
    payload: [
      { id: 1, title: "Spiritual", price: 200 },
      { id: 2, title: "Science", price: 150 },
    ],
  };
};
