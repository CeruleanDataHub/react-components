import { withKnobs } from "@storybook/addon-knobs";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";
import { Typography } from "../Typography/Typography";
import { Popover } from "./Popover";

export default {
  title: "Popover",
  component: Popover,
  decorators: [withKnobs]
};

const ListWrapper = styled.div`
  width: 100%;
  text-align: start;
`;

const PopoverContentList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PopoverContentListItem = styled.li`
  padding: 0.5em 3em 0.5em 1.25em;
  display: block;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    background: papayawhip;
  }
`;

const ListItemIcon = styled.span`
  font-size: 0.75em;
  margin-right: 0.5rem;
`;

const ListDivider = styled.div`
  margin: 0.25em 0;
  border: 1px solid #ddd;
`;

export const PopoverStory = () => {
  const containerRef = useRef(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div style={{ height: 350 }}>
      <Typography fontFamily="openSans">
        <button
          type="button"
          ref={containerRef}
          onClick={() => setPopoverOpen(!popoverOpen)}
        >
          Toggle popover
        </button>
        <Popover isOpen={popoverOpen} containerRef={containerRef}>
          <PopoverContentList>
            <ListWrapper>
              <PopoverContentListItem>Profile</PopoverContentListItem>
              <PopoverContentListItem>Settings</PopoverContentListItem>
              <ListDivider />
              <PopoverContentListItem>
                <Icon name="rocket" as={ListItemIcon} />
                Manage devices
              </PopoverContentListItem>
              <PopoverContentListItem>
                <Icon name="user" as={ListItemIcon} />
                Manage users
              </PopoverContentListItem>
              <PopoverContentListItem>
                <Icon name="users" as={ListItemIcon} />
                Manage roles
              </PopoverContentListItem>
              <ListDivider />
              <PopoverContentListItem>Help</PopoverContentListItem>
              <PopoverContentListItem>Log out</PopoverContentListItem>
            </ListWrapper>
          </PopoverContentList>
        </Popover>
      </Typography>
    </div>
  );
};

export const PopoverOpenStory = () => {
  const containerRef = useRef(null);

  return (
    <div style={{ height: 100 }}>
      <button type="button" ref={containerRef}>
        Popover is open under the button
      </button>
      <Popover isOpen containerRef={containerRef}>
        Popover
      </Popover>
    </div>
  );
};
