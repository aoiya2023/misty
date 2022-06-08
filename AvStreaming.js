// Streaming URL: rtsp://172.28.92.36:1936
let stream = {
    "URL": "rtspd:1936",
    "Width": 1920,
    "Height": 1080
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function startStreaming() {
    enableAvStreamingService();
    
    await sleep(2000);

    startAvStreaming(stream);

}

async function stopStreaming() {
    stopAvStreaming();

    await sleep(2000);

    disableAvStreamingService();
}

function enableAvStreamingService() {
    axios.post("http://" + ip + "/api/services/avstreaming/enable")
        .then(function (response) {
            // Print the results
            console.log(`EnableAvStreamingService was a ${response.data.status}`);
        })
        // Use .catch() to handle errors
        .catch(function (error) {
            // Print any errors
            console.log(`There was an error with the request ${error}`);
        });
}

function disableAvStreamingService() {
    axios.post("http://" + ip + "/api/services/avstreaming/disable")
        .then(function (response) {
            // Print the results
            console.log(`DisableAvStreamingService was a ${response.data.status}`);
        })
        // Use .catch() to handle errors
        .catch(function (error) {
            // Print any errors
            console.log(`There was an error with the request ${error}`);
        });
}

function startAvStreaming(stream) {
    axios.post("http://" + ip + "/api/avstreaming/start", stream)
        .then(function (response) {
            // Print the results
            console.log(`StartAvStreaming was a ${response.data.status}`);
        })
        // Use .catch() to handle errors
        .catch(function (error) {
            // Print any errors
            console.log(`There was an error with the request ${error}`);
        });
}

function stopAvStreaming() {
    axios.post("http://" + ip + "/api/avstreaming/stop")
        .then(function (response) {
            // Print the results
            console.log(`StopAvStreaming was a ${response.data.status}`);
        })
        // Use .catch() to handle errors
        .catch(function (error) {
            // Print any errors
            console.log(`There was an error with the request ${error}`);
        });
}