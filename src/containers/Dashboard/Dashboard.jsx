import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.section`
  margin-left: 18em;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
`;

export const Dashboard = ({ children }) => {
  const columns = Array.isArray(children)
    ? children.map(() => "auto").join(" ")
    : "auto";

  return (
    <DashboardContainer id="dashboard" columns={columns}>
      {children}
    </DashboardContainer>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node,
};

Dashboard.defaultProps = {
  children: "",
};
