import { LightSocket } from './LightSocket';
import { playAudio, stopAudio, displayImage, speak } from './APIcalls';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { objections } from './Texts';



export default function ReactionButtonPress(props) {
    let created;
    let pushed;
    let released;
    let timeDiff;
    let socket;
    let numTimePressed;

    function startBumpSensor() {
        console.log("start sensor");
        // setNumTimePressed(0);
        numTimePressed = 0;
        const options = {
            connectionTimeout: 1000,
        }
        const websocket = new ReconnectingWebSocket("ws://" + props.ip + "/pubsub", [], options);
        socket = new LightSocket(websocket, openCallback);
        socket.Connect();
    }
    
    function stopBumpSensor() {
        socket.Unsubscribe("BumpSensor");
        socket.Disconnect();
    }
    
    function openCallback() {
        console.log("socket opened");
        const time = Date.now().toString();
        socket.Subscribe("LeftBumpSensor_" + time, "BumpSensor", null, 
        "sensorName", "==", "Bump_FrontLeft", null, _leftBumpSensor);
    }

    function _leftBumpSensor(data) {
        try {
            console.log(data);
            created = data.message.created;
            let isContacted = data.message.isContacted;
            // console.log(data.message)
            if (data.message !== "Registration Status: API event registered.") {
                if (created !== null && isContacted) {
                    numTimePressed++;
    
                    playAudio(props.ip, "s_Fear.wav");
                    displayImage(props.ip, "e_EcstacyHilarious.jpg");
                    
                    pushed = new Date(created);
                    console.log("Pushed: " + pushed);
                }
                if (created !== null && !isContacted) {
                    stopAudio(props.ip);
                    displayImage(props.ip, "e_eye3.jpg");
                    playSound();
        
                    released = new Date(created);
                    timeDiff = (released - pushed) / 1000;
        
                    console.log("Released: " + released);
                    console.log("Duration: " + timeDiff);
        
                }
            }
            
        }
        catch(e) {
            console.log("Error: " + e)
        }
    }

    function playSound() {
        if (numTimePressed % 6 === 1) {
            console.log("first reaction");
            speak(props.ip, objections[0].text, objections[0].utteranceId)
        }
        else if (numTimePressed % 6 === 2) {
            console.log("second reaction");
            speak(props.ip, objections[1].text, objections[1].utteranceId)
            
        }
        else if (numTimePressed % 6 === 3) {
            console.log("third reaction");
            speak(props.ip, objections[2].text, objections[2].utteranceId)
            
        }
        else if (numTimePressed % 6 === 4) {
            console.log("fourth reaction");
            speak(props.ip, objections[3].text, objections[3].utteranceId)
              
        }
        else if (numTimePressed % 6 === 5) {
            console.log("fifth reaction");
            speak(props.ip, objections[4].text, objections[4].utteranceId)
           
        }
        else {
            console.log("sixth reaction");
            speak(props.ip, objections[5].text, objections[5].utteranceId)
             
        }
    }


    return (
        <div className="bump-button">
            <button className="button" onClick={startBumpSensor}>Start Bump Sensor</button>
            <button className="button" onClick={stopBumpSensor}>Stop Bump Sensor</button>
        </div>
        
    )
}