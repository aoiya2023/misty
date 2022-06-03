// misty's IP address
const ip = "172.28.123.134";
// Create new instane of LightSocket called socket.
let socket = new LightSocket(ip, openCallback);

// subscribe to the TimeOfFlight Websocket.
// subscribe to the LocomotionCommand WebSocket.
// send Misty a DriveTime command.
function openCallback() {

    console.log("socket opened");

    // Subscribe to an event called CenterTimeOfFlight that returns TimeOfFlight data. 
    // socket.Subscribe(eventName, msgType, debounceMs, property, inequality, value, [returnProperty], [eventCallback])
    socket.Subscribe("CenterTimeOfFlight", "TimeOfFlight", 100, 
    "SensorPosition", "==", "Center", null, _centerTimeOfFlight);

    // Subscribe to an event called LocomotionCommand that returns data when Misty's angular or linear velocity changes.
    socket.Subscribe("LocomotionCommand", "LocomotionCommand", null, 
    null, null, null, null, _locomotionCommand);

    let data = {
        LinearVelocity: 50,
        AngularVelocity: 0,
        TimeMS: 5000
    }

    // Use axios.post() to send the data to the endpoint for the DriveTime command.
    axios.post("http://" + ip + "/api/drive/time", data)
        // Use .then() to handle a successful response.
        .then(function (response) {
            // Print the results
            console.log(`DriveTime was a ${response.data.status}`);
        })
        // Use .catch() to handle errors
        .catch(function (error) {
            // Print any errors
            console.log(`There was an error with the request ${error}`);
        });
    
}

/* CALLBACKS */
let _centerTimeOfFlight = function (data) {
    try {
        let distance = data.message.distanceInMeters;
        console.log(distance);

        if (distance < 0.2) {
            axios.post("http://" + ip + "/api/drive/stop")
                .then(function (response) {
                    // Print the results
                    console.log(`Stop was a ${response.data.status}`);
                })
                .catch(function (error) {
                    // Print any errors
                    console.log(`There was an error with the request ${error}`);
                });
        }
    } 
    catch(e) {

    }

};
let _locomotionCommand = function (data) {
    try {
        // Use an if statement to check whether Misty stopped moving
        if (data.message.linearVelocity === 0) {
            console.log("LocomotionCommand received linear velocity as", data.message.linearVelocity);
            socket.Unsubscribe("CenterTimeOfFlight");
            socket.Unsubscribe("LocomotionCommand");

        }
    }
    catch(e) {

    }
};

// Open the connection to the robot.
socket.Connect();