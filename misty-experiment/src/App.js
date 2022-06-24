// import axios from 'axios';
import './App.css';
import Controls from './components/Controls';
import Experiment1 from './components/Experiment1';
import Experiment2 from './components/Experiment2';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


// URL: 
const ip = "172.28.92.36";



function App() {
  const [condition, setCondition] = useState("1");

  function handleOnChange(e) {
    setCondition(e.target.value);
  } 

  return (
    <div className="App">
      <FormControl>
        <FormLabel>Experiment</FormLabel>
        <RadioGroup 
          value={condition}
          onChange={(e) => handleOnChange(e)}
          row
        >
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
        </RadioGroup> 
      </FormControl>
        
        <Controls ip={ip}/>
        <Experiment1 ip={ip} condition={condition}/>
        <Experiment2 ip={ip} condition={condition}/>
    </div>
  );
}

export default App;
