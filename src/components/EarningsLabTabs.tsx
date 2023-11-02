import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import YourEarnings from './YourEarnings';
import YourPayouts from './YourPayouts';

const EarningsLabTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab sx={{textTransform:"none", fontWeight: "bold", marginRight:"4px", width:"240px"}} label="Your Earnings" value="1" />
            <Tab sx={{textTransform:"none", fontWeight: "bold", marginLeft:"4px", width:"240px"}} label="Your Payouts" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ paddingTop: '19px', paddingRight: '13px', paddingLeft: '15px'}}><YourEarnings /></TabPanel>
        <TabPanel value="2" style={{ paddingTop: '39px', paddingRight: '45px', paddingLeft: '32px'}}><YourPayouts /></TabPanel>
      </TabContext>
    </Box>
  );
}

export default EarningsLabTabs