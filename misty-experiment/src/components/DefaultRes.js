/**
 * Default Response
 */
import { speak } from "./APIcalls";
import { useState } from "react";
import { defaultRes } from "./Texts";
import Checkbox from '@mui/material/Checkbox'; 
import './Experiment.css';

export default function DefaultRes(props) {
    const [checkedState, setCheckedState] = useState(
        new Array(defaultRes.length).fill(false)
    );
    // When the checkbox is clicked, speak API call is made
    function handleOnChange(position, text, utteranceId) {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);  // check the checkbox
        speak(props.ip, text, utteranceId);
        props.logInfo("Last Spoken: " + text);  // log from App.js
    };

    return (
        <div className="experiment">
            <h4>Default Response</h4>
            <ul className="text-list">
                {defaultRes.map(({text, utteranceId}, index) => {
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