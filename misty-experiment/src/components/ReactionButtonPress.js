let created;
let pushed;
let released;
let timeDiff;
let socket;
let numTimePressed;

// const regexSec = /[0-9]{2}\.[0-9]*/;
// const regexMin = /:[0-9]{2}/;
// const regexHr = /T[0-9]{2}/;

function startBumpSensor() {
    numTimePressed = 0;
    socket = new LightSocket(ip, openCallback);
    socket.Connect();
}

function stopBumpSensor() {

    socket.Unsubscribe("BumpSensor");
    socket.Disconnect();
}

function openCallback() {
    console.log("socket opened");

    socket.Subscribe("LeftBumpSensor", "BumpSensor", null, 
        "sensorName", "==", "Bump_FrontLeft", null, _leftBumpSensor);

}

function _leftBumpSensor(data) {
    try {
        console.log(data);
        created = data.message.created;
        isContacted = data.message.isContacted;

        if (created !== null && isContacted) {
            numTimePressed++;
            console.log('Press Num: ' + numTimePressed);
            playSound();
            image["FileName"] = "e_EcstacyHilarious.jpg";
            displayImage(image);
            
            pushed = new Date(created);
            console.log("Pushed: " + pushed);
        }
        if (created !== null && !isContacted) {
            stopAudio();
            image["FileName"] = "e_eye3.jpg";
            displayImage(image);

            released = new Date(created);
            timeDiff = (released - pushed) / 1000;

            console.log("Released: " + released);
            console.log("Duration: " + timeDiff);

        }

    }
    catch(e) {
        console.log("Error: " + e)
    }
}

function playSound() {
    sound["FileName"] = "s_Fear.wav";
    playAudio(sound);
    if (numTimePressed === 2) {
        speech00Z();
    }
    else if (numTimePressed === 3) {
        speech00X();
    }
    else if (numTimePressed === 4) {
        speech00C();
    }
    else if (numTimePressed === 5) {
        speech00V();
    }
    else if (numTimePressed >= 6) {
        speech00B();
    }
}


export default ReactionButtonPress() {
    return (
        <div>
            <button onClick={startBumpSensor}>Start Bump Sensor</button>
            <button onClick={stopBumpSensor}>Stop Bump Sensor</button>
        </div>
        
    )
}