/**
 * Reaction to Bump Sensor Press
 */
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

    // Start receiving data from bump sensor 
    function startBumpSensor() {
        console.log("start sensor");
        
        numTimePressed = 0;
        const options = {
            connectionTimeout: 1000,
        }
        // ReconnectingWebSocket automatically reconnects if the conenction is closed (until Disconnect is called)
        const websocket = new ReconnectingWebSocket("ws://" + props.ip + "/pubsub", [], options);
        socket = new LightSocket(websocket, openCallback);
        socket.Connect();
    }
    
    // Stops receiving data from bump sensor
    function stopBumpSensor() {
        socket.Unsubscribe("BumpSensor");
        socket.Disconnect();
    }
    
    // callback function
    function openCallback() {
        console.log("socket opened");
        const time = Date.now().toString();

        // socket.Subscribe = function (eventName, msgType, debounceMs, property, inequality, value, returnProperty, eventCallback)
        // eventName needs to be different every time
        socket.Subscribe("LeftBumpSensor_" + time, "BumpSensor", null, 
        "sensorName", "==", "Bump_FrontLeft", null, _leftBumpSensor);
    }

    function _leftBumpSensor(data) {
        try {
            console.log(data);
            created = data.message.created;
            let isContacted = data.message.isContacted;
            if (data.message !== "Registration Status: API event registered.") {
                // if the sensor is pushed
                if (created !== null && isContacted) {
                    numTimePressed++;
    
                    playAudio(props.ip, "s_Fear.wav");
                    displayImage(props.ip, "e_EcstacyHilarious.jpg");
                    
                    pushed = new Date(created);
                }
                // if the sensor is released
                if (created !== null && !isContacted) {
                    stopAudio(props.ip);
                    displayImage(props.ip, "e_eye3.jpg");
                    playSound();
        
                    released = new Date(created);
                    timeDiff = (released - pushed) / 1000;
        
                    props.logInfo("Duration: " + timeDiff);  // log from App.js
                    
                    
        
                }
            }
            
        }
        catch(e) {
            console.log("Error: " + e)
        }
    }

    // Make the robot say an objection to sensor press
    function playSound() {
        if (numTimePressed % 6 === 1) {
            props.logInfo("reaction 1");  // log from App.js
            speak(props.ip, objections[0].text, objections[0].utteranceId)
        }
        else if (numTimePressed % 6 === 2) {
            props.logInfo("reaction 2");  // log from App.js
            speak(props.ip, objections[1].text, objections[1].utteranceId)
            
        }
        else if (numTimePressed % 6 === 3) {
            props.logInfo("reaction 3");  // log from App.js
            speak(props.ip, objections[2].text, objections[2].utteranceId)
            
        }
        else if (numTimePressed % 6 === 4) {
            props.logInfo("reaction 4");  // log from App.js
            speak(props.ip, objections[3].text, objections[3].utteranceId)
              
        }
        else if (numTimePressed % 6 === 5) {
            props.logInfo("reaction 5");  // log from App.js
            speak(props.ip, objections[4].text, objections[4].utteranceId)
           
        }
        else {
            props.logInfo("reaction 6");  // log from App.js
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