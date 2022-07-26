/**
 * Online Experiment 1 (Experiment 3)
 */
import { speak } from "./APIcalls";
import { useState } from "react";
import { textsExp3 } from "./Texts";
import { action3 } from "./Actions";
import Checkbox from '@mui/material/Checkbox';
import './Experiment.css';

export default function Experiment3(props) {
    const expCondition = parseInt(props.condition)
    let filtered;
    // filtered is an array of utterances that is needed for the current condition
    filtered = textsExp3?.filter(({condition}) => condition === expCondition || condition === 0);
    const [checkedState, setCheckedState] = useState(
        new Array(filtered.length).fill(false)
    );
    // When the checkbox is checked, speak + locomotion command is sent
    function handleOnChange(position, text, utteranceId) {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        speak(props.ip, text, utteranceId);
        props.logInfo("Last Spoken: " + text);
        
        action3(props.ip);
        
    };
    
    return (
        <div className="experiment">
            <h3 className="heading">Experiment 3 (Online Experiment 1)</h3>
            <ul className="text-list">
                {filtered.map(({text, utteranceId}, index) => {
                    return (
                        <li key={index}>
                            <div className="container">
                                <Checkbox
                                    type="checkbox"
                                    id={utteranceId}
                                    value={text}
                                    checked={checkedState[index]}
                                    onChange={(e) => handleOnChange(index, e.currentTarget.value, utteranceId)}
                                />
                                <label htmlFor={index}>{utteranceId + ': ' + text}</label>
                            </div>
                        </li>
                    )
                })

                }
            </ul>            
    
        </div>
    )
}