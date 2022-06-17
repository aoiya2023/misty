import { LightSocket } from './LightSocket';
import { playAudio, stopAudio, displayImage } from './APIcalls';
import ReconnectingWebSocket from 'reconnecting-websocket';



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
    
            if (created !== null && isContacted) {
                numTimePressed++;

                playSound();
                displayImage(props.ip, "e_EcstacyHilarious.jpg");
                
                pushed = new Date(created);
                console.log("Pushed: " + pushed);
            }
            if (created !== null && !isContacted) {
                stopAudio(props.ip);
                displayImage(props.ip, "e_eye3.jpg");
    
                released = new Date(created);
                timeDiff = (released - pushed) / 1000;
    
                console.log("Released: " + released);
                console.log("Duration: " + timeDiff);
    
            }
            let numString = toString(numTimePressed);
            let durationString = toString(timeDiff);
            let content = "NumTimePressed: " + numString + "     Duration: " + durationString 
            props.saveLog("./log.text", content);
    
        }
        catch(e) {
            console.log("Error: " + e)
        }
    }

    function playSound() {
        playAudio(props.ip, "s_Fear.wav");
        if (numTimePressed % 6 === 1) {
            console.log("first reaction");
        }
        else if (numTimePressed % 6 === 2) {
            console.log("second reaction");
        }
        else if (numTimePressed % 6 === 3) {
            console.log("third reaction");
        }
        else if (numTimePressed % 6 === 4) {
            console.log("fourth reaction");   
        }
        else if (numTimePressed % 6 === 5) {
            console.log("fifth reaction");
        }
        else  {
            console.log("sixth reaction");   
        }
    }


    return (
        <div>
            <button onClick={startBumpSensor}>Start Bump Sensor</button>
            <button onClick={stopBumpSensor}>Stop Bump Sensor</button>
        </div>
        
    )
}