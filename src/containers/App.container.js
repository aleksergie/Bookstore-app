import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../redux/books/books.actions";
import App from "../components/App.component";
import orderBy from "lodash/orderBy";

const sortBy = (books, filteredBy) => {
  switch (filteredBy) {
    case "priceHigh":
      return orderBy(books, "price", "desc");
    case "priceLow":
      return orderBy(books, "price", "asc");
    case "author":
      return orderBy(books, "author", "asc");
    default:
      return books;
  }
};

const filterBooks = (books, searchQuery) => {
  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const searchBooks = (books, filteredBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filteredBy);
};

const mapStateToProps = ({ books, filter }) => ({
  books: searchBooks(books.items, filter.filteredBy, filter.searchQuery),
  isReady: books.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(bookActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
