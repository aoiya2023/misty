import { speak } from "./APIcalls";
import { useState } from "react";
import { textsExp1 } from "./Texts";
import { leftArmUp, bothArmsUp, question } from "./Actions"; 
import './Experiment.css';

export default function Experiment1(props) {
    const expCondition = parseInt(props.condition)
    let filtered;
    filtered = textsExp1.filter(({text, utteranceId, condition}) => condition === expCondition || condition === 0);
    const [checkedState, setCheckedState] = useState(
        new Array(filtered.length).fill(false)
    );
    
    function handleOnChange(position, text, utteranceId) {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        console.log(text);
        speak(props.ip, text, utteranceId);
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

    // console.log(condition1);
    // let filtered;
    // filtered = condition1.filter(({text, utteranceId, condition}) => condition === 1 || condition === 0);
    // console.log(filtered);

    
    return (
        <div className="experiment">
            <h3>Experiment 1</h3>
            <ul className="text-list">
                {filtered.map(({text, utteranceId}, index) => {
                    return (
                        <li key={index}>
                            <div className="container">
                                <input
                                    type="checkbox"
                                    id={index}
                                    name={utteranceId}
                                    value={utteranceId}
                                    title={text}
                                    checked={checkedState[index]}
                                    onChange={(e) => handleOnChange(index, e.currentTarget.title, utteranceId)}
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