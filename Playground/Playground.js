/* GLOBAL VARIABLES*/
const ip = "172.28.92.36";
// Create new instane of LightSocket called socket.
// let socket;
// let data = {
//     "LinearVelocity": 0,
//     "AngularVelocity": 0
// }


// var timer;

// document.addEventListener('keydown', keyPressed)
// document.addEventListener('keyup', stopDrive)

// function stopDrive() {
//     axios.post("http://" + ip + "/api/drive/stop")
//     // clearInterval(timer);
//     // timer=null;


// }

// function keyPressed(e) {
//     console.log("key press event " + `${e.code}`)
    
//     if (timer) return;
    
//     if (e.code === 'KeyW') {
//         data["LinearVelocity"] = 30
//         console.log(data)
//     }
//     if (e.code === 'KeyS') {
//         data["LinearVelocity"] = -30
//     }
//     if (e.code === 'KeyA') {
//         data["AngularVelocity"] = -30
//     }
//     if (e.code === 'KeyD') {
//         data["AngularVelocity"] = 30
//     }
//     // timer = setInterval(drive(data), 100);

// }

// function drive(data) {
//     axios.post("http://" + ip + "/api/drive", data)
//     // Use .then() to handle a successful response.
//     .then(function (response) {
//         // Print the results
//         console.log(`Drive was a ${response.data.status}`);
//     })
//     // Use .catch() to handle errors
//     .catch(function (error) {
//         // Print any errors
//         console.log(`There was an error with the request ${error}`);
//     });

//     // socket = new LightSocket(ip, openCallback);
//     // // Open the connection to the robot.
//     // socket.Connect();
    
// }



// function openCallback() {

//     console.log("socket opened");

//     // Subscribe to an event called CenterTimeOfFlight that returns TimeOfFlight data. 
//     // socket.Subscribe(eventName, msgType, debounceMs, property, inequality, value, [returnProperty], [eventCallback])
//     socket.Subscribe("CenterTimeOfFlight", "TimeOfFlight", 100, 
//     "SensorPosition", "==", "Center", null, _centerTimeOfFlight);

//     // Subscribe to an event called LocomotionCommand that returns data when Misty's angular or linear velocity changes.
//     socket.Subscribe("LocomotionCommand", "LocomotionCommand", null, 
//     null, null, null, null, _locomotionCommand);

//     let data = {
//         LinearVelocity: 30,
//         AngularVelocity: 10,
//         TimeMS: 2000
//     }

//     // Use axios.post() to send the data to the endpoint for the DriveTime command.
//     axios.post("http://" + ip + "/api/drive/time", data)
//         // Use .then() to handle a successful response.
//         .then(function (response) {
//             // Print the results
//             console.log(`DriveTime was a ${response.data.status}`);
//         })
//         // Use .catch() to handle errors
//         .catch(function (error) {
//             // Print any errors
//             console.log(`There was an error with the request ${error}`);
//         });
    
// }

// /* CALLBACKS */
// let _centerTimeOfFlight = function (data) {
//     try {
//         let distance = data.message.distanceInMeters;
//         console.log(distance);

//         if (distance < 0.2) {
//             axios.post("http://" + ip + "/api/drive/stop")
//                 .then(function (response) {
//                     // Print the results
//                     console.log(`Stop was a ${response.data.status}`);
//                 })
//                 .catch(function (error) {
//                     // Print any errors
//                     console.log(`There was an error with the request ${error}`);
//                 });
//         }
//     } 
//     catch(e) {

//     }

// };

// let _locomotionCommand = function (data) {
//     try {
//         // Use an if statement to check whether Misty stopped moving
//         if (data.message.linearVelocity === 0) {
//             console.log("LocomotionCommand received linear velocity as", data.message.linearVelocity);
//             socket.Unsubscribe("CenterTimeOfFlight");
//             socket.Unsubscribe("LocomotionCommand");

//         }
//     }
//     catch(e) {

//     }
// };

