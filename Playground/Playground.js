/* GLOBAL VARIABLES*/
const ip = "172.28.92.36";
// Create new instane of LightSocket called socket.
// let socket;
// let data = {
//     "LinearVelocity": 0,
//     "AngularVelocity": 0
// }

let sound = {
    // "FileName": "https://drive.google.com/file/d/1L3hBHfi5zNf8y1WuvgE6FBWrhrcMPYrS/preview"
    // "FileName": "https://ia802609.us.archive.org/9/items/Free_20s_Jazz_Collection/Bennie_Moten_Kater_St._Rag.mp3"
    "FileName": "",
    // "FileName": "s_Fear_4m.mp3",
    "Volume": 50
    // "FileName": "https://soundcloud.com/aoi-yasuda/misty_fear?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
}

let painImage = {
    "FileName": "e_EcstacyHilarious.jpg",
    "Alpha": 1
}

let defaultImage = {
    "FileName": "e_eye3.jpg",
    "Alpha": 1
}

let created;
let pushed;
let pushedInt;
let released;
let releasedInt;
let timeDiff;
let isCreated;
let socket;
let time;
let numTimePressed;

const regex = /[0-9]{2}\.[0-9]*/;

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

    socket.Subscribe("LefBumpSensor", "BumpSensor", null, 
        "sensorName", "==", "Bump_FrontLeft", null, _leftBumpSensor);

}

function _leftBumpSensor(data) {
    try {
        console.log(data);
        created = data.message.created;
        isContacted = data.message.isContacted;

        if (created !== null && isContacted) {
            numTimePressed++;
            console.log(numTimePressed);
            playAudio();
            displayPain();
            pushed = created.match(regex);
            pushedInt = parseFloat(pushed);
            
            console.log("Pushed: " + pushed);
        }
        if (created !== null && !isContacted) {
            stopAudio();
            displayDefault();
            released = created.match(regex);
            releasedInt = parseFloat(released);

            timeDiff = releasedInt - pushedInt;

            console.log("Released: " + released);
            console.log("Duration: " + timeDiff);

        }

        // console.log(created);
        // console.log(isCreated);
        // console.log(sensorName);
    }
    catch(e) {
        console.log("Error: " + e)
    }
}


function playAudio() {
    if (numTimePressed === 1) {
        sound["FileName"] = "ringtone.mp3";
    }
    else if (numTimePressed === 2) {
        sound["FileName"] = "starWars.mp3";
    }
    else if (numTimePressed === 3) {
        sound["FileName"] = "oneVoice.mp3";
    }
    else if (numTimePressed === 4) {
        sound["FileName"] = "aThousandMiles.mp3";
    }
    else {
        sound["FileName"] = "piratesOfCaribbean.mp3";
    }
    axios.post("http://" + ip + "/api/audio/play", sound)
        .then(function (response) {
            // Print the results
            console.log(`PlayAudio was a ${response.data.status}`);
        })
        // Use .catch() to handle errors
        .catch(function (error) {
            // Print any errors
            console.log(`There was an error with the request ${error}`);
        });
}

function stopAudio() {
    axios.post("http://" + ip + "/api/audio/stop")
        .then(function (response) {
            // Print the results
            console.log(`StopAudio was a ${response.data.status}`);
        })
        // Use .catch() to handle errors
        .catch(function (error) {
            // Print any errors
            console.log(`There was an error with the request ${error}`);
        });
}

function displayPain() {
    axios.post("http://" + ip + "/api/images/display", painImage)
        .then(function (response) {
            // Print the results
            console.log(`displayPain was a ${response.data.status}`);
        })
        // Use .catch() to handle errors
        .catch(function (error) {
            // Print any errors
            console.log(`There was an error with the request ${error}`);
        })
}

function displayDefault() {
    axios.post("http://" + ip + "/api/images/display", defaultImage)
        .then(function (response) {
            // Print the results
            console.log(`displayDefault was a ${response.data.status}`);
        })
        // Use .catch() to handle errors
        .catch(function (error) {
            // Print any errors
            console.log(`There was an error with the request ${error}`);
        })
}
