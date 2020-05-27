import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const BookCard = (book) => {
  const { title, author, price, image, addToCart, addedCount } = book;
  return (
    <Card color="grey">
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="dollar" />
          {price}
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, book)}>
        Add to cart {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default BookCard;
