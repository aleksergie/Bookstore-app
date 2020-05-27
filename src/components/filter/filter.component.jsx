import React from "react";
import { Menu, Input } from "semantic-ui-react";

const Filter = ({ setFilter, filteredBy, searchQuery, setSearchQuery }) => (
  <Menu secondary>
    <Menu.Item
      active={filteredBy === "all"}
      onClick={setFilter.bind(this, "all")}
    >
      All
    </Menu.Item>
    <Menu.Item
      active={filteredBy === "popular"}
      onClick={setFilter.bind(this, "popular")}
    >
      Popular
    </Menu.Item>
    <Menu.Item
      active={filteredBy === "priceHigh"}
      onClick={setFilter.bind(this, "priceHigh")}
    >
      Price (high)
    </Menu.Item>
    <Menu.Item
      active={filteredBy === "priceLow"}
      onClick={setFilter.bind(this, "priceLow")}
    >
      Price (low)
    </Menu.Item>
    <Menu.Item
      active={filteredBy === "author"}
      onClick={setFilter.bind(this, "author")}
    >
      Author
    </Menu.Item>
    <Menu.Item>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        icon="search"
        placeholder="Search..."
      />
    </Menu.Item>
  </Menu>
);

export default Filter;
