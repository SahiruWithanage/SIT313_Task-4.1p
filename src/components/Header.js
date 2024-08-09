import React from "react";
import { Menu, Input } from "semantic-ui-react";

const Header = () => (
  <Menu
    style={{
      backgroundColor: "#f0f0f0",
      padding: "0.25em 0",
      borderRadius: 0,
      border: "1px solid #ccc",
    }}
  >
    <Menu.Item header style={{ fontFamily: "monospace", fontWeight: "bold" }}>
      DEV@Deakin
    </Menu.Item>
    <Menu.Item style={{ flexGrow: 1 }}>
      <Input
        icon="search"
        placeholder="Search..."
        style={{ width: "100%", borderRadius: 0, border: "1px solid #ccc" }}
      />
    </Menu.Item>
    <Menu.Item position="right" style={{ fontFamily: "monospace" }}>
      Post
    </Menu.Item>
    <Menu.Item style={{ fontFamily: "monospace" }}>Login</Menu.Item>
  </Menu>
);

export default Header;
