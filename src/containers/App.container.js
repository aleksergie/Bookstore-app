import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../redux/books/books.actions";
import App from "../components/App.component";
import orderBy from "lodash/orderBy";

const sortBy = (books, filteredBy) => {
  switch (filteredBy) {
    case "all":
      return books;
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

const mapStateToProps = ({ books }) => ({
  books: sortBy(books.items, books.filteredBy),
  isReady: books.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(bookActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
