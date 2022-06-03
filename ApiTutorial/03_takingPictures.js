/* GLOBAL */

// Declare a constant variable.
// Set its value to your robot's IP address.
const ip = "172.28.123.134";
let firstTime = true;
let socket = new LightSocket(ip, openCallback);
let subscribed;

/*TIMEOUT */

// Define sleep(). This function pauses execution
// for a set period of time.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* CALLBACKS */
async function openCallback() {
    subscribed = false;
    socket.Unsubscribe("FaceRecognition");
    await sleep(8000);

    socket.Subscribe("FaceRecognition", "FaceRecognition", 1000, null, null, null, null, _FaceRecognition);

}

async function _FaceRecognition(data) {
    console.log("CV callback called: ", data);
    // Update subscribed to true
    if (!subscribed) {
        subscribed = true;

        if (firstTime) {
            axios.post("http://" + ip + "/api/faces/recognition/start")
                .catch((err) => {
                    console.log(err);
                });
            // Update firstTime
            firstTime = false;
        }

        return
    }
    try {
        // Use the Date() object to define a unique name for each picture Misty takes.
        let fileName = new Date().toLocaleString().replace(/[/]/g, 
        ".").replace(/[:]/g, ".").replace(/[ ]/g, "_").replace(",", "") + "_Face";
        // Send a GET request i the endpoint for the TakePicture command
        axios.get("http://" + ip + "/api/cameras/rgb", {
            params: {
                Base64: null,
                FileName: fileName,
                Width: 1200,
                Height: 1600,
                DisplayOnScreen: false,
                OverwriteExisting: true
            }
        })
            .then(function (res) {
                console.log(res);
                console.log("Image saved with fileName: '" + fileName + "'");
            });
        
            openCallback();
    }
    catch (err) {
        console.log(err);
    }
    
}

socket.Connect();