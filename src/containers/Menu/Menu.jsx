import React from "react";
import styled from "styled-components";

const Icon = styled.span`
    font-size: 1.5em;
    margin-right: 1.75rem;
    float: left;
`;

const MenuItems = styled.ul`
    margin: 1em 0 0 0.25em;
    padding: 0;
    list-style-type: none;
`;

const MenuItem = styled.li`
    display: block;
    padding: 1em;
    line-height: 1.5em;
    height: 1.5em;
    font-weight: 300;
    font-family: 'Exo 2', sans-serif;
    text-transform: uppercase;
`;

const MenuItemText = styled.span`
    display: ${props => props.menuOpen ? 'block' : 'none' };
`;


export default class Menu extends React.Component {
    render() {
        // TODO: menu state from redux in the future    
        const menuOpen = true; 
        return (
            <MenuItems>
                { this.renderItems(this.props.items, menuOpen) }
            </MenuItems>
        )
    }

    renderItems(items, menuOpen) {
        return items && items.map(item => {
            const classes = ['lnr', item.iconClass];
            return (
                <MenuItem>
                    <Icon className={ classes }/>
                    <MenuItemText menuOpen={ menuOpen}>{ item.name }</MenuItemText> 
                </MenuItem>
            );
        });
    }
}