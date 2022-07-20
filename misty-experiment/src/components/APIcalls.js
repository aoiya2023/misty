import axios from 'axios';

let stream = {
    "URL": "rtspd:1936",
    "Width": 1920,
    "Height": 1080,
    "UserName": "ayasuda",
    "Password": "v35K+%GC:t]w%SM5"
}

let speech = {
    "Text": "",
    "Flush": true,
    "UtteranceId": ""
};

let sound = {
    "FileName": "",
    "Volume": 20
};

let image = {
    "FileName": "", 
    "Alpha": 1
}

/*********************************************************************************
 *********************************************************************************
 * Speech & Audio
 *********************************************************************************
 *********************************************************************************/
// speak(data)
// Converts text to speech and make misty speak.
export function speak(ip, text, utteranceId) {
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

// playAudio(data)
// play audio from misty. Recommend to use audio that is already loaded to misty.
export function playAudio(ip, filename, volume=20) {
    sound["FileName"] = filename;
    sound["Volume"] = volume;
    axios.post("http://" + ip + "/api/audio/play", sound)
        .then(function (response) {
            console.log(`PlayAudio was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        });
}

// stopAudio()
// stops the audio that is currently playing.
export function stopAudio(ip) {
    axios.post("http://" + ip + "/api/audio/stop")
        .then(function (response) {
            console.log(`StopAudio was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        });
}

/*********************************************************************************
 *********************************************************************************
 * Streaming
 *********************************************************************************
 *********************************************************************************/
// Posts API call to enable AV Streaming service.
export function enableAvStreamingService(ip) {
    axios.post("http://" + ip + "/api/services/avstreaming/enable")
        .then(function (response) {
            console.log(`EnableAvStreamingService was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        });
}

// Posts API call to disable AV Streaming service.
export function disableAvStreamingService(ip) {
    axios.post("http://" + ip + "/api/services/avstreaming/disable")
        .then(function (response) {
            console.log(`DisableAvStreamingService was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        });
}

// Posts API call to start AV streaming.
export function startAvStreaming(ip, data=stream) {
    axios.post("http://" + ip + "/api/avstreaming/start", data)
        .then(function (response) {
            console.log(`StartAvStreaming was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        });
}

// Posts API call to stop AV streaming.
export function stopAvStreaming(ip) {
    axios.post("http://" + ip + "/api/avstreaming/stop")
        .then(function (response) {
            console.log(`StopAvStreaming was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        });
}

/*********************************************************************************
 *********************************************************************************
 * Expression
 *********************************************************************************
 *********************************************************************************/
// displayImage(data)
// Display an image (eyes) to misty's face. 
export function displayImage(ip, filename) {
    image["FileName"] = filename
    axios.post("http://" + ip + "/api/images/display", image)
        .then(function (response) {
            console.log(`displayImage was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        })
}