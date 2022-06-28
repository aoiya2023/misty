import { speak } from "./APIcalls";
import { useState } from "react";
import { textsExp1 } from "./Texts";
import { leftArmUp, bothArmsUp, question } from "./Actions";
import Checkbox from '@mui/material/Checkbox';
import './Experiment.css';

export default function Experiment1(props) {
    const expCondition = parseInt(props.condition)
    let filtered;
    filtered = textsExp1?.filter(({condition}) => condition === expCondition || condition === 0);
    const [checkedState, setCheckedState] = useState(
        new Array(filtered.length).fill(false)
    );
    
    function handleOnChange(position, text, utteranceId) {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        speak(props.ip, text, utteranceId);
        props.saveLastUtterance(text);
        
        if (utteranceId === "001" || utteranceId === "002") {
            leftArmUp(props.ip);
        };
        if (utteranceId === "003") {
            question(props.ip, true);
        };
        if (utteranceId === "004" || utteranceId === "006") {
            bothArmsUp(props.ip);
        };
        if (utteranceId === "005") {
            question(props.ip);
        };
        
    };
    
    return (
        <div className="experiment">
            <h3 className="heading">Experiment 1</h3>
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