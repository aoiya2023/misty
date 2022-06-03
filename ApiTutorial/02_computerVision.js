 /* GLOBAL VARIABLES*/
 const ip = "172.28.123.134";
 const you = "Aoi-Yasuda"
 let onList = false;

 let socket = new LightSocket(ip, openCallback);

 /* TIMEOUT */
 // Hhelper function called sleep that can pause code execution for a period of time.
 function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
 }

 /* CALLBACKS */
 async function openCallback() {
     socket.Unsubscribe("FaceRecognition");

     await sleep(3000);

     // Issue a GET request to the endpoint for the GetKnownFaces command.
     axios.get("http://" + ip + "/api/faces").then(function (res) {
         // Store the list of known faces in the faceArr variable and print this list.
         let faceArr = res.data.result;
         console.log("Learned faces:", faceArr);

         for (let i = 0; i < faceArr.length; i++) {
             // If a match is found, update the value of onList to true.
             if (faceArr[i] === you) {
                 onList = true;
             }
         }
     });

     socket.Subscribe("FaceRecognition", "FaceRecognition", 200, null, null, null, null, _FaceRecognition);

     if (onList) {
         console.log("You were found on the list!");
         startFaceRecognition();
     } else {
         console.log("You're not on the list...");
         startFaceTraining();
     }

 }

 function _FaceRecognition(data) {
     try {
         if (data.message.label !== "unknown person" && data.message.label !== null && data.message.label !== undefined) {
             console.log(`A face was recognized. Hello there ${data.message.label}!`);

             socket.Unsubscribe("FaceRecognition");
             axios.post("http://" + ip + "/api/faces/recognition/stop")
}
     }
     catch (e) {
         console.log("Error: " + e)
     }
 }

 /* COMMANDS */
 function startFaceRecognition() {
     console.log("starting face recognition");
     axios.post("http://" + ip + "/api/faces/recognition/start");
 };

 async function startFaceTraining() {
     console.log("starting face training");
     axios.post("http://" + ip + "/api/faces/training/start", { FaceId: you });

     await sleep(20000);
     console.log("face training complete");
     axios.post("http://" + ip + "/api/faces/recognition/start");

 };

 socket.Connect();