import React from "react";
import { List, Icon } from "semantic-ui-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="explore">
          <h3>Explore</h3>
          <List>
            <List.Item>Home</List.Item>
            <List.Item>Questions</List.Item>
            <List.Item>Articles</List.Item>
            <List.Item>Tutorials</List.Item>
          </List>
        </div>
        <div className="support">
          <h3>Support</h3>
          <List>
            <List.Item>FAQs</List.Item>
            <List.Item>Help</List.Item>
            <List.Item>Contact Us</List.Item>
          </List>
        </div>
        <div className="stay-connected">
          <h3>Stay connected</h3>
          <List horizontal className="footer-list-horizontal">
            {socialMediaLinks.map((link, index) => (
              <List.Item key={index} className="footer-list-item">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <Icon name={link.icon} size="large" />
                </a>
              </List.Item>
            ))}
          </List>
        </div>
      </div>
      <div className="footer-bottom">
        <h2>DEV@Deakin 2022</h2>
        <List horizontal>
          <List.Item>Privacy Policy</List.Item>
          <List.Item>Terms</List.Item>
          <List.Item>Code of Conduct</List.Item>
        </List>
      </div>
    </footer>
  );
};

const socialMediaLinks = [
  { name: "Facebook", icon: "facebook", url: "https://www.facebook.com" },
  { name: "Twitter", icon: "twitter", url: "https://www.twitter.com" },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com" },
];

export default Footer;
