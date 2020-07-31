import React, { useState } from "react";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";
import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal
};

export const ModalStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ height: 500 }}>
      <Typography fontFamily="openSans">
        <Button onClick={toggleModal} color="blue">
          Open modal
        </Button>
        <Modal isOpen={isOpen} onBackgroundClick={toggleModal}>
          <p>Modal content</p>
        </Modal>
      </Typography>
    </div>
  );
};
