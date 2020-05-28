import React from "react";
import { Card, Icon, Image, Button, Rating } from "semantic-ui-react";

const BookCard = (book) => {
  const { title, author, price, image, rating, addToCart, addedCount } = book;
  return (
    <Card color="grey">
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
        <Rating icon="star" defaultRating={rating} maxRating={5} />
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
