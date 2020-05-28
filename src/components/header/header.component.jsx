import React from "react";
import { Menu, Popup, List, Image, Icon } from "semantic-ui-react";

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <Image avatar src={image} />
      <List.Content>
        {title}
        <Icon
          name="close"
          onClick={removeFromCart.bind(this, id)}
          color="red"
        ></Icon>
      </List.Content>
      {/* <List.Content floated="right">
        <Icon
          name="close"
          onClick={removeFromCart.bind(this, id)}
          color="red"
        ></Icon>
      </List.Content> */}
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
        size="large"
        position="top right"
        trigger={
          <Menu.Item name="help">
            Cart (<b>{count}</b>)
          </Menu.Item>
        }
        content={
          items.length
            ? items.map((book) => <CartComponent {...book} />)
            : "cart is empty..."
        }
        on="click"
      />
    </Menu.Menu>
  </Menu>
);

export default Header;
