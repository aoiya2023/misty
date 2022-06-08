let image = {
    "FileName": "e_eye3.jpg",
    "Alpha": 1
}

function displayImage() {
    axios.post("http://" + ip + "/api/images/display", image)
        .then(function (response) {
            // Print the results
            console.log(`displayImage was a ${response.data.status}`);
        })
        // Use .catch() to handle errors
        .catch(function (error) {
            // Print any errors
            console.log(`There was an error with the request ${error}`);
        })
}

/*
 * 
 * GetBlinkSettings & SetBlinkSettings
 * 
 * most likely not necessary, but they will change the blink settings
 * 
 * 
*/ 

let blink = {
    "BlinkImages": "",
    "OpenEyeMinMs" : 1000,
    "OpenEyeMaxMs" : 7000,
    "ClosedEyeMinMs" : 100,
    "ClosedEyeMaxMs" : 200,
    "RevertToDefault": false
};

function getBlinkSettings() {
    axios.get("http://" + ip + "/api/blink/settings").then(function (res) {
        blink["BlinkImages"] = res.data.result.blinkImages;
        console.log("Current blinking eyes: ", blink)
    })
}

function setBlinkSettings() {
    blink["BlinkImages"] = "e_eye3.jpg=e_SystemBlinkStandard.jpg"
    console.log(blink)
    axios.post("http://" + ip + "/api/blink/settings", blink)
    .then(function (response) {
                // Print the results
                console.log(`SetBlinkSettings was a ${response.data.status}`);
            })
            // Use .catch() to handle errors
            .catch(function (error) {
                // Print any errors
                console.log(`There was an error with the request ${error}`);
            })
        
}