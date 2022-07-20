import Experiment3 from './Experiment3';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FivePronouns(props) {
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
            </RadioGroup> 
          </FormControl>
          <Experiment3 ip={props.ip} condition={condition} logInfo={props.logInfo}/>
          
        </div>
    )
}