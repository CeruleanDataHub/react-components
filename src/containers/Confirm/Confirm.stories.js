import React, { useState } from "react";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";
import { Confirm } from "./Confirm";

export default {
  title: "Confirm",
  component: Confirm
};

const ConfirmToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleConfirm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Typography fontFamily="openSans">
      <Button onClick={toggleConfirm} color="blue">
        Open Confirm
      </Button>
      <Confirm
        title="Confirm title"
        text="Confirm modal content"
        isOpen={isOpen}
        onConfirm={toggleConfirm}
        onCancel={toggleConfirm}
      />
    </Typography>
  );
};

export const ConfirmToggleStory = () => (
  <div style={{ minHeight: 500, maxWidth: 600 }}>
    <ConfirmToggle />
  </div>
);
