// import axios from 'axios';
import './App.css';
import Controls from './components/Controls';
import Experiment1 from './components/Experiment1';
import Experiment2 from './components/Experiment2';
import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


// URL: 
const ip = "172.28.92.36";



function App() {
  const [condition, setCondition] = useState("1");
  const [lastSpoken, setLastSpoken] = useState("");

  function saveLastUtterance(text) {
    setLastSpoken(text);
  }

  useEffect(() => {
    console.log("Last Spoken: ", lastSpoken)
  })

  function logInfo(text) {
    console.log(text);
  }
  function handleOnChange(condition) {
    setCondition(condition);
    logInfo("Experiment Condition: " + condition)
  }

  return (
    <div className="App">
      <FormControl>
        <FormLabel>Experiment</FormLabel>
        <RadioGroup 
          value={condition}
          onChange={(e) => handleOnChange(e.target.value)}
          row
        >
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
        </RadioGroup> 
      </FormControl>
        
        <Controls ip={ip} saveLastUtterance={saveLastUtterance} logInfo={logInfo}/>
        <Experiment1 ip={ip} condition={condition} saveLastUtterance={saveLastUtterance}/>
        <Experiment2 ip={ip} saveLastUtterance={saveLastUtterance}/>
    </div>
  );
}

export default App;
