import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.section`
    margin-left: 18em;
    display: grid;
    grid-template-columns: ${ props => props.columns || 'auto' };
`;



export default class Dashboard extends React.Component {

    render() {
        const columns = this.props.children.map(_ => 'auto').join(' ');
        return (
            <DashboardContainer id="dashboard" columns={ columns }>
                { this.props.children }
            </DashboardContainer>
        )
    }
   ;
}