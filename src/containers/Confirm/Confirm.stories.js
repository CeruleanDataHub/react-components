import React, { useState } from "react";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";
import { Confirm } from "./Confirm";

export default {
  title: "Confirm",
  component: Confirm
};

export const ConfirmStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleConfirm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ minHeight: 500, maxWidth: 600 }}>
      <Typography fontFamily="openSans">
        <Button onClick={toggleConfirm} color="blue">
          Open Confirm
        </Button>

        <Confirm
          title="Confirm title"
          content="Confirm modal content"
          isOpen={isOpen}
          onConfirm={toggleConfirm}
          onCancel={toggleConfirm}
        />
      </Typography>
    </div>
  );
};

export const ConfirmWithComponentContentStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleConfirm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ minHeight: 500, maxWidth: 600 }}>
      <Typography fontFamily="openSans">
        <Button onClick={toggleConfirm} color="blue">
          Open Confirm
        </Button>

        <Confirm
          title="Confirm title"
          content={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <input
              type="text"
              placeholder="Confirm can also have react components as content"
              style={{ width: "80%", padding: "1rem" }}
            />
          }
          isOpen={isOpen}
          onConfirm={toggleConfirm}
          onCancel={toggleConfirm}
        />
      </Typography>
    </div>
  );
};
