// Misty Tutorial

// Sends a message to debug listeners
misty.Debug("The HelloWorld skill is starting!")

////////////////////////////////////////////////////
// 
// Head Movement
// 
////////////////////////////////////////////////////

// Returns a random integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// The look_around timer event invokes this callback function.
function _look_around(repeat = true) {

    // Moves Misty's head to a random position. Adjust the min/max
    // values passed into getRandomInt() to change Misty's range of
    // motion when she calls this method.

    // Duration more smooth compared to using velocity
    misty.MoveHeadDegrees(
        getRandomInt(-40, 20), // Random pitch position between -40 and 20
        getRandomInt(-30, 30), // Random roll position between -30 and 30
        getRandomInt(-40, 40), // Random yaw position between -40 and 40
        null, // Velocity. Nullable. (We use duration here, instead.)
        1); // Head movement duration, in seconds.
        

        // If repeat is set to true, re-registers for the look_around
        // timer event, and Misty moves her head until the skill ends.
        if (repeat) misty.RegisterTimerEvent(
            "look_around",
            getRandomInt(5, 10) * 1000,
            false);
}

// Method for setting up a timer event
// misty.RegisterTimerEvent(EventName(str), callbackTimeInMs(int), keepAlive(bool));
// keepAlive... whether Misty should remain registered for this event after it triggers a callback function.
misty.RegisterTimerEvent("look_around", getRandomInt(5, 10) * 1000, false);


////////////////////////////////////////////////////
// 
// LED
// 
////////////////////////////////////////////////////

// Calls TransitionLED command to pulse Misty's chest LED purple.
// Sets RGB values for starting color to 140, 0, and 220 (purple); sets
// RGB values for finishing color to 0, 0, and 0 (black, or LED off).
// Sets transitionType to "Breathe", and duration to 1000ms (1 second).

// misty.TransitionLED(Red, Green, Blue, Red2, Green2, Blue2, TransitionType, TimeMS);
misty.TransitionLED(0, 102, 204, 204, 229, 255, "Breathe", 1000);

// Try changing the starting and finishing RGB values, transitionType,
// and duration to achieve different effects!


////////////////////////////////////////////////////
// 
// Playing Sounds
// 
////////////////////////////////////////////////////

// Plays an audio file at 80% volume.
// misty.PlayAudio("s_Amazement.wav", 80);
// Pauses for 3000 milliseconds before executing the next command.
// misty.Pause(3000);


////////////////////////////////////////////////////
// 
// Driving Misty
// 
////////////////////////////////////////////////////

// misty.DriveTime(0, 30, 5000); // Turns Misty to her left
// misty.Pause(6000); // Wait for turn to complete, =1 second
// misty.DriveTime(0, -30, 5000); // Turns Misty to her right
// misty.Pause(6000); // Wait for turns to complete, +1 second
// misty.Stop(); // Stops driving motors

////////////////////////////////////////////////////
// 
// Teaching Misty to Wave
// 
////////////////////////////////////////////////////

// Waves Misty's right arm!
function waveRightArm() {
    misty.MoveArmDegrees("right", -80, 30); // Right arm up to wave
    misty.Pause(3000); // Pause with arm up for 3 seconds
    misty.MoveArmDegrees("both", 80, 30); // Both arms down
}

waveRightArm();

////////////////////////////////////////////////////
// 
// Using Face Recognition
// 
////////////////////////////////////////////////////

// Invoke this function to start Misty recognizing faces.
function _registerFaceRec() {
    // Cancels any face recognition that's currently underway
    misty.StopFaceRecognition();
    // Starts face recognition
    misty.StartFaceRecognition();
    // If a FaceRecognition event includes a "Label" property,
    // then Misty invokes the _FaceRec callback function.
    misty.AddPropertyTest("FaceRec", "Label", "exists", "", "string");
    // Registers for FaceRecognition events. Sets eventName to FaceRec,
    // debounceMs to 1000, and keepAlive to false.
    misty.RegisterEvent("FaceRec", "FaceRecognition", 1000, false);
}

// FaceRec events invoke this callback function.
function _FaceRec(data) {
    // Stores the value of the detected face
    var faceDetected = data.PropertyTestResults[0].PropertyParent.Label;
    // Logs a debug message with the label of the detected face
    misty.Debug("Misty sees " + faceDetected);

    // Use the Command Center to train Misty to recognize your face.
    // Then, replace <FaceID> below with your own name! If Misty
    // sees and recognizes you, she waves and looks happy.
    if (faceDetected == "<FaceID>") {
        misty.DisplayImage("e_Joy.jpg");
        misty.PlayAudio("s_Joy3.wav");
        waveRightArm();
    }
    // If Misty sees someone she doesn't know, she raises her eyebrow
    // and plays a different sound.
    else if (faceDetected == "unknown person") {
        misty.DisplayImage("e_Contempt.jpg");
        misty.PlayAudio("s_DisorientedConfused4.wav");
    };

    // Register for a timer event to invoke the _registerFaceRec
    // callback function loop through the _registerFaceRec() again
    // after 7000 milliseconds pass.
    misty.RegisterTimerEvent("registerFaceRec", 7000, false);
}

// Starts Misty recognizing faces!
_registerFaceRec();