import { speak } from "./APIcalls";
import { useState } from "react";
import { textsExp1 } from "./Texts";

export default function Experiment1(prop) {
    const [checkedState, setCheckedState] = useState(
        new Array(textsExp1.length).fill(false)
    );
    
    function handleOnChange(position, text, utteranceId) {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        console.log(text);
        speak(text, utteranceId);
    };

    return (
        <div>
            <h3>Experiment 1</h3>
            <ul className="text-list">
                {textsExp1.map(({text, utteranceId}, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <input
                                    type="checkbox"
                                    id={index}
                                    name={utteranceId}
                                    value={utteranceId}
                                    title={text}
                                    checked={checkedState[index]}
                                    onChange={(e) => handleOnChange(index, e.currentTarget.title, utteranceId)}
                                />
                                <label htmlFor={index}>{text}</label>
                            </div>
                        </li>
                    )
                })

                }
            </ul>            
    
        </div>
    )
}