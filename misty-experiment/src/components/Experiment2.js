import { speak } from "./APIcalls";
import { useState } from "react";
import { textsExp2 } from "./Texts";
import Checkbox from '@mui/material/Checkbox';
import { leftArmUp, bothArmsUp, question, tilt } from "./Actions"; 

export default function Experiment2(props) {
    const [checkedState, setCheckedState] = useState(
        new Array(textsExp2.length).fill(false)
    );
    
    function handleOnChange(position, text, utteranceId) {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        speak(props.ip, text, utteranceId);
        props.logInfo("Last Spoken: " + text);

        if (utteranceId === "00Q") {
            bothArmsUp(props.ip);
        }
        if (utteranceId === "00W") {
             tilt(props.ip);
        } 
        if (utteranceId === "00E") {
            question(props.ip);
        }
        if (utteranceId === "00R") {
            leftArmUp(props.ip);
        }
        if (utteranceId === "00T") {
            tilt(props.ip);
        }
        if (utteranceId === "00Y") {
            leftArmUp(props.ip);
        }
        if (utteranceId === "00U") {
            tilt(props.ip);
        }
        if (utteranceId === "00I") {
            leftArmUp(props.ip);
        }
        if (utteranceId === "00O") {
            bothArmsUp(props.ip);
        }
        if (utteranceId === "00A") {
            question(props.ip);
        }
        if (utteranceId === "00S") {
            bothArmsUp(props.ip);
        }
        if (utteranceId === "00D") {
            tilt(props.ip);
        }
        if (utteranceId === "00G") {
            leftArmUp(props.ip);
        }
        if (utteranceId === "00H") {
            question(props.ip);
        }
        if (utteranceId === "00J") {
            question(props.ip);
        }
    };

    return (
        <div className="experiment">
            <h3 className="heading">Experiment 2</h3>
            <ul className="text-list">
                {textsExp2.map(({text, utteranceId}, index) => {
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