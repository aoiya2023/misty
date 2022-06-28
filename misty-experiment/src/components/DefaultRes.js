import { speak } from "./APIcalls";
import { useState } from "react";
import { defaultRes } from "./Texts";
// import { leftArmUp, bothArmsUp, question } from "./Actions";
import Checkbox from '@mui/material/Checkbox'; 
import './Experiment.css';

export default function DefaultRes(props) {
    const [checkedState, setCheckedState] = useState(
        new Array(defaultRes.length).fill(false)
    );
    
    function handleOnChange(position, text, utteranceId) {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        speak(props.ip, text, utteranceId);
        props.saveLastUtterance(text);
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