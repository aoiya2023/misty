import './App.css';
import InPerson from './components/InPerson';
import FivePronouns from './components/FivePronouns';
import ConflictQueues from './components/ConflictQueues';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


// Robot IP address 
const ip = "172.28.92.36";

// Define each tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ div: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    value: index
  };
}

function App() {
  const [tabValue, setTabValue] = useState(0);

  // logging to console
  function logInfo(text) {
    console.log(text);
  }

  function handleTabChange(event, newtab) {
    setTabValue(newtab);
    logInfo("Current experiment: " + newtab)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="In-person experiment" {...a11yProps(0)} />
          <Tab label="using 5 pronouns" {...a11yProps(1)} />
          <Tab label="Conflicting gender queues" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <InPerson ip={ip} logInfo={logInfo}/>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <FivePronouns ip={ip} logInfo={logInfo}/>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
      <ConflictQueues ip={ip} logInfo={logInfo}/>
      </TabPanel>
    </Box>
  );
}

export default App;
