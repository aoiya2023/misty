import Controls from './Controls';
import Experiment1 from './Experiment1';
import Experiment2 from './Experiment2';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// IN-PERSON EXPERIMENT
export default function InPerson(props) {
    // experiment condition
    const [condition, setCondition] = useState("1");  

    function handleConditionChange(condition) {
      setCondition(condition);
      props.logInfo("Experiment Condition: " + condition)  // log from App.js
    }

    return (
        <div className="InPerson">
          <FormControl>
            <FormLabel>Experiment Condition</FormLabel>
            <RadioGroup 
              value={condition}
              onChange={(e) => handleConditionChange(e.target.value)}
              row
            >
              {/* Define # of conditions here */}
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
            </RadioGroup> 
          </FormControl>
          
          <Controls ip={props.ip} logInfo={props.logInfo}/>
          <Experiment1 ip={props.ip} condition={condition} logInfo={props.logInfo}/>
          <Experiment2 ip={props.ip} logInfo={props.logInfo}/>
        </div>
    )
}