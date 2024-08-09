import React from "react";
import { Form, Input, Button } from "semantic-ui-react";
import "./SubscribeForm.css";

const SubscribeForm = () => {
  return (
    <Form action="/" method="POST" className="subscribe-form">
      <label htmlFor="email">SIGN UP FOR OUR DAILY INSIDER</label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="subscribe-input"
      />
      <Button type="submit" name="submit" className="subscribe-button">
        Subscribe
      </Button>
    </Form>
  );
};

export default SubscribeForm;
