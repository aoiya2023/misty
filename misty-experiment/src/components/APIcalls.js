import axios from 'axios'
const ip = "192.168.0.7";

let stream = {
    "URL": "rtspd:1936",
    "Width": 1920,
    "Height": 1080
}

let speech = {
    "Text": "",
    "Flush": true,
    "UtteranceId": ""
};

/*********************************************************************************
 *********************************************************************************
 * Speech & Audio
 *********************************************************************************
 *********************************************************************************/
// speak(data)
// Converts text to speech and make misty speak.
export function speak(text, utteranceId) {
    speech["Text"] = text;
    speech["UtteranceId"] = utteranceId;
    axios.post("http://" + ip + "/api/tts/speak", speech)
        .then(function (response) {
        console.log(`speak was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        })
}

/*********************************************************************************
 *********************************************************************************
 * Streaming
 *********************************************************************************
 *********************************************************************************/
// Posts API call to enable AV Streaming service.
export function enableAvStreamingService() {
    axios.post("http://" + ip + "/api/services/avstreaming/enable")
        .then(function (response) {
            console.log(`EnableAvStreamingService was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        });
}

// Posts API call to disable AV Streaming service.
export function disableAvStreamingService() {
    axios.post("http://" + ip + "/api/services/avstreaming/disable")
        .then(function (response) {
            console.log(`DisableAvStreamingService was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        });
}

// Posts API call to start AV streaming.
export function startAvStreaming(data=stream) {
    axios.post("http://" + ip + "/api/avstreaming/start", data)
        .then(function (response) {
            console.log(`StartAvStreaming was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        });
}

// Posts API call to stop AV streaming.
export function stopAvStreaming() {
    axios.post("http://" + ip + "/api/avstreaming/stop")
        .then(function (response) {
            console.log(`StopAvStreaming was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        });
}
