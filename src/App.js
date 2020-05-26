import React, { Component } from "react";
import { connect } from "react-redux";
import { setBooks } from "./redux/books/books.actions";
import Header from "./components/header/header.component";
import { Container } from "semantic-ui-react";
import BookCard from "./components/book-card/book-card.component";
import { Card } from "semantic-ui-react";
import LoaderComponent from "./components/loader/loader.component";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get("/books.json").then(({ data }) => {
      setBooks(data);
    });
  }
  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Header />
        <Card.Group itemsPerRow={4}>
          {!isReady ? (
            <LoaderComponent />
          ) : (
            books.map((book, index) => <BookCard key={index} {...book} />)
          )}
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  setBooks: (books) => dispatch(setBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
