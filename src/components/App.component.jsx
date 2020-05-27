import React, { Component } from "react";
import Header from "../containers/Header.container";
import { Container } from "semantic-ui-react";
import BookCard from "../containers/BookCard.container";
import Filter from "../containers/Filter.container";
import { Card } from "semantic-ui-react";
import LoaderComponent from "./loader/loader.component";
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
        <Filter />
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
export default App;
