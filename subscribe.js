import React from "react";
import './App.css';
import { Input, Button } from "semantic-ui-react";

function SubscribeForm() {
  return (
    <div className="subscribe-form">
      <h3>Sign up for our daily insider</h3>
      <Input type="email" placeholder="Enter your email" />
      <Button primary>Subscribe</Button>
    </div>
  );
}

export default SubscribeForm;
