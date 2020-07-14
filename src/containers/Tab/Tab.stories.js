import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import styled from "styled-components";

import { Tab } from "./Tab";

export default {
  title: "Tab",
  component: Tab
};

const tabs = ["Tab 1", "Tab 2", "Tab 3"];

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTabSelect = value => {
    setActiveTab(value);
  };

  return (
    <TabsContainer>
      {tabs.map(tab => (
        <Tab
          text={tab}
          onClick={() => handleTabSelect(tab)}
          active={activeTab === tab}
          key={tab}
        />
      ))}
    </TabsContainer>
  );
};

export const TabStory = () => (
  <div style={{ width: 100 }}>
    <Tab text="Tab" onClick={action("tab-clicked")} />
  </div>
);

export const TabActiveStory = () => (
  <div style={{ width: 100 }}>
    <Tab text="Tab" onClick={action("tab-clicked")} active />
  </div>
);

export const MultipleTabsStory = () => (
  <div>
    <Tabs />
  </div>
);
