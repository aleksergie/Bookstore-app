import booksActionTypes from "./books.types";

export const setBooks = (books) => ({
  type: booksActionTypes.SET_BOOKS,
  payload: books,
});
