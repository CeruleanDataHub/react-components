import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { usePopper } from "react-popper-2";
import styled from "styled-components";

const PopperContainer = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  text-align: center;

  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: " ";
      background-color: white;
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -25px;
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^="top"] > #arrow {
    bottom: -30px;
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Popover = ({ isOpen, containerRef, children }) => {
  const [arrowRef, setArrowRef] = useState(null);
  const popoverRef = useRef(null);
  const { styles } = usePopper(containerRef.current, popoverRef.current, {
    modifiers: [
      {
        name: "arrow",
        options: {
          element: arrowRef
        }
      },
      {
        name: "offset",
        options: {
          offset: [0, 10]
        }
      }
    ]
  });

  if (!isOpen) {
    return null;
  }

  return (
    <PopperContainer ref={popoverRef} style={styles.popper}>
      <div ref={setArrowRef} style={styles.arrow} id="arrow" />
      {children}
    </PopperContainer>
  );
};

Popover.propTypes = {
  /** Defines whether to render the popover */
  isOpen: PropTypes.bool,
  /** Reference for container element  */
  containerRef: PropTypes.oneOfType([
    PropTypes.func,
    // eslint-disable-next-line no-undef
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  /** React node */
  children: PropTypes.node
};

Popover.defaultProps = {
  isOpen: false,
  containerRef: null,
  children: ""
};
