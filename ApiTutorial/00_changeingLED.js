// Declare a constant variable ip and set its value to misty's IP address.
const ip = "172.28.123.134";
// Create a data object to send with the POST request.
// Set values for each RGB color property.
let data = {
    "red": 255,
    "green": 0,
    "blue": 255
}
// Call axios.post(). Pass the URL of the ChangeLED
// endpoint as the first parameter and the data object
// as the second.
// Use a then() method after calling axios.post().
// Pass in a callback function to interpret the return
// values of the call and to print a message to the console
// indicating the request's success.
axios.post("http://" + ip + "/api/led", data)
    .then(function (response) {
        console.log(`ChangeLED was a ${response.data.status}`);
    })
    .catch(function (error) {
        console.log(`There was an error with the request ${error}`);
    })