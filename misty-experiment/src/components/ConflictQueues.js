import Experiment4 from './Experiment4';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ConflictQueues(props) {
    const [condition, setCondition] = useState("1");

    function handleConditionChange(condition) {
      setCondition(condition);
      props.logInfo("Experiment Condition: " + condition)
    }
    return (
        <div className="FivePronouns">
          <FormControl>
            <FormLabel>Experiment Condition</FormLabel>
            <RadioGroup 
              value={condition}
              onChange={(e) => handleConditionChange(e.target.value)}
              row
            >
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
              <FormControlLabel value="5" control={<Radio />} label="5" />
              <FormControlLabel value="6" control={<Radio />} label="6" />
              <FormControlLabel value="7" control={<Radio />} label="7" />
              <FormControlLabel value="8" control={<Radio />} label="8" />
              <FormControlLabel value="9" control={<Radio />} label="9" />
              <FormControlLabel value="10" control={<Radio />} label="10" />
            </RadioGroup> 
          </FormControl>
          <Experiment4 ip={props.ip} condition={condition} logInfo={props.logInfo}/>
        </div>
    )
}