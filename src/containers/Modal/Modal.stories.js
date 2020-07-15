import React, { useState } from "react";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";
import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal
};

const ModalToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Typography fontFamily="openSans">
      <Button onClick={toggleModal} color="blue">
        Open modal
      </Button>
      <Modal isOpen={isOpen} onBackgroundClick={toggleModal}>
        <p>Modal content</p>
      </Modal>
    </Typography>
  );
};

export const ModalToggleStory = () => (
  <div style={{ minHeight: 500 }}>
    <ModalToggle />
  </div>
);
