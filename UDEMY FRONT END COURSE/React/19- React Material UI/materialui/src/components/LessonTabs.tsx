import React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

const LessonTabs = () => {
  return (
    <Tabs defaultValue={0}>
      <TabList>
        <Tab>first</Tab>
        <Tab>second</Tab>
        <Tab>third</Tab>
      </TabList>
      <TabPanel value={0}>first</TabPanel>
      <TabPanel value={1}>second</TabPanel>
      <TabPanel value={2}>third</TabPanel>
    </Tabs>
  );
};

export default LessonTabs;
