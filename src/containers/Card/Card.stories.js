import React from "react";
import { Card } from "./Card.jsx";

export default {
  title: "Card",
  component: Card,
};

export const CardStory = () => (
  <div style={{ width: "500px" }}>
    <Card item={{ iconClass: "lnr-users", title: "Users" }}>
      You have 30 users
    </Card>
  </div>
);
