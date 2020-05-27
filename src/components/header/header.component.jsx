import React from "react";
import { Menu, Popup, List, Button, Image, Icon } from "semantic-ui-react";

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Icon
          name="close"
          onClick={removeFromCart.bind(this, id)}
          color="red"
        ></Icon>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const Header = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item name="browse">Bookstore</Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="signup">
        Total: &nbsp;<b>{totalPrice}$</b>
      </Menu.Item>

      <Popup
        size="huge"
        trigger={
          <Menu.Item name="help">
            Cart (<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map((book) => (
          <CartComponent {...book} />
        ))}
        on="click"
      />
    </Menu.Menu>
  </Menu>
);

export default Header;
