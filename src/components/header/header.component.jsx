import React from "react";
import { Menu } from "semantic-ui-react";

const Header = () => (
  <Menu>
    <Menu.Item name="browse">Bookstore</Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="signup">
        Quantity: &nbsp;<b>0</b>
      </Menu.Item>

      <Menu.Item name="help">
        Cart (<b>0</b>)
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Header;
