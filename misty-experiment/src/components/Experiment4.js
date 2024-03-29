/**
 * Online Experiment 2 (Experiment 4)
 */
import { playAudio, speak } from "./APIcalls";
import { useState } from "react";
import { textsExp4 } from "./Texts";
import { action3 } from "./Actions";
import Checkbox from '@mui/material/Checkbox';
import './Experiment.css';

// audio file that you want to play
// Ordered 
let audioFiles = [
    "masculine_none.mp3",
    "feminine_none.mp3",
    "masculine_it.mp3",
    "feminine_it.mp3",
    "masculine_they.mp3",
    "feminine_they.mp3",
    "masculine_he.mp3",
    "feminine_he.mp3",
    "masculine_she.mp3",
    "feminine_she.mp3"
]
export default function Experiment4(props) {
    const expCondition = parseInt(props.condition)
    let filtered;
    // filtered is an array of utterances that is needed for the current condition
    filtered = textsExp4?.filter(({condition}) => condition === expCondition || condition === 0);
    const [checkedState, setCheckedState] = useState(
        new Array(filtered.length).fill(false)
    );
    // When the checkbox is checked, speak + locomotion command is sent
    function handleOnChange(position, text, utteranceId) {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        /**
         * Use speak command if you want to use the robot's voice. 
         * 
         * However, as of now (07/20/2022), the pitch or rate of the voice cannot be changed from code. 
         * Prosody is a supported attribute that theortially allows you to change pitch, rate, etc. but
         * it didn't work.
         */
        // speak(props.ip, text, utteranceId);
        
        if (utteranceId === "401") {
            playAudio(props.ip, audioFiles[0], 40);
        }
        if (utteranceId === "402") {
            playAudio(props.ip, audioFiles[1], 40);
        }
        if (utteranceId === "403") {
            playAudio(props.ip, audioFiles[2], 40);
        }
        if (utteranceId === "404") {
            playAudio(props.ip, audioFiles[3], 40);
        }
        if (utteranceId === "405") {
            playAudio(props.ip, audioFiles[4], 40);
        }
        if (utteranceId === "406") {
            playAudio(props.ip, audioFiles[5], 40);
        }
        if (utteranceId === "407") {
            playAudio(props.ip, audioFiles[6], 40);
        }
        if (utteranceId === "408") {
            playAudio(props.ip, audioFiles[7], 40);
        }
        if (utteranceId === "409") {
            playAudio(props.ip, audioFiles[8], 40);
        }
        if (utteranceId === "410") {
            playAudio(props.ip, audioFiles[9], 40);
        }
        action3(props.ip);
        props.logInfo("Last Spoken: " + text);  // log from App.js
        
        
        
        
    };
    
    return (
        <div className="experiment">
            <h3 className="heading">Experiment 4 (Online Experiment 2)</h3>
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