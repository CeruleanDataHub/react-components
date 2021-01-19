import "react-sortable-tree/style.css";

import PropTypes from "prop-types";
import React from "react";
import SortableTree from "react-sortable-tree";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;

export const TreeView = ({
  treeData,
  onChange,
  canDrag,
  generateNodeProps
}) => (
  <Container>
    <SortableTree
      treeData={treeData}
      onChange={onChange}
      canDrag={canDrag}
      generateNodeProps={generateNodeProps}
    />
  </Container>
);

TreeView.propTypes = {
  treeData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      // eslint-disable-next-line react/forbid-prop-types
      children: PropTypes.array
    })
  ),
  onChange: PropTypes.func,
  canDrag: PropTypes.bool,
  generateNodeProps: PropTypes.func
};

TreeView.defaultProps = {
  treeData: [],
  onChange: () => null,
  canDrag: false,
  generateNodeProps: () => null
};
