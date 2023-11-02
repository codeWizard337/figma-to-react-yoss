import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import ConfirmedVisits from './ConfirmedVisits';
import PendingVisits from './PendingVisits';

const VisitsLabTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab sx={{textTransform:"none", fontWeight: "bold", marginRight:"4px", width:"240px"}} label="Confirmed Visits" value="1" />
            <Tab sx={{textTransform:"none", fontWeight: "bold", marginLeft:"4px", width:"240px"}} label="Pending Visits" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ paddingTop: '19px', paddingRight: '13px', paddingLeft: '15px'}}><ConfirmedVisits /></TabPanel>
        <TabPanel value="2" style={{ paddingTop: '19px', paddingRight: '13px', paddingLeft: '15px'}}><PendingVisits /></TabPanel>
      </TabContext>
    </Box>
  );
}

export default VisitsLabTabs