import React, { Component } from "react";
import { connect } from "react-redux";
import { setBooks } from "./redux/books/books.actions";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get("/books.json").then(({ data }) => {
      setBooks(data);
    });
  }
  render() {
    const { books } = this.props;
    return (
      <ul>
        {!books
          ? "Loading..."
          : books.map((book) => (
              <li>
                <b>{book.title}</b>
              </li>
            ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
});

const mapDispatchToProps = (dispatch) => ({
  setBooks: (books) => dispatch(setBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
