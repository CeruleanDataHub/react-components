import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.section`
  margin-left: 18em;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
`;

export class Dashboard extends React.Component {
  render() {
    let columns;
    if (Array.isArray(this.props.children)) {
      columns = this.props.children.map((_) => 'auto').join(' ');
    } else {
      columns = 'auto';
    }
    return (
      <DashboardContainer id="dashboard" columns={columns}>
        {this.props.children}
      </DashboardContainer>
    );
  }
}
