# Misty Experiment Platform

## Available Scripts

If this is your first time and have never run the app, do:

### `npm install`

This will install dependencies that are required to run the app.


After you run the above command, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## How to Navigate

Descriptions for navigating the platform. Each section may include tips/notes that I wrote down while writing the code and testing the platform.

### Console Log

Any information/error is logged to console. Any important ones such as experiment condition, last spoken utterance, and # of times the bump sensor was pressed, etc is logged from `App.js`. 

### Experiment Condition

Depending on the condition that is chosen, the scripts will change.

### Experiment Controls

#### Streaming

`Start Streaming` starts streaming on the specified URL.  
The URL will be `rtsp://<UserName>:<Password>)@<robot-ip-address>:<port-number>`. Specify `UserName` and `Password` in 
`APIcalls.js`. Be sure to set them for security.

`Stop Streaming` stops the streaming.

- The light on the robot's head will turn on when streaming. Recommend to start streaming before participant enters the room (consent form needs to be signed outside in order to do that). 
- Streaming has several seconds of latency.
- For viewing the streaming, VLC is recommended. 

#### Bump Sensor

`Start Bump Sensor` starts the bump sensor for experiment 2. While the bump sensor is active, the robot will give a specified reaction. 
`Stop Bump Sensor` makes the bump sensor inactive.

- Start bump sensor at the start of experiment 2.

#### Default Response

These are responses when the participant says something out of script. You can add/delete these by editing `Texts.js`.

### Experiment 1,2,3,4

When the checkbox is clicked, the speak command to the robot with the displayed utterance is sent.

- To avoid clicking by accident, it would be better if the css of the checkbox changes (more siginificantly) after it has been clicked once. Do not make them unclickable, since the participant may repeat.

## Files

- `App.js`
    - `InPerson.js`
        - `Controls.js`
            - `ReactionButtonPress.js` 
            - `DefaultRes.js`   
        - `Experiment1.js`
        - `Experiment2.js`
    - `FivePronouns.js`
        - `Experiment3.js`
    - `ConflictQueues.js`
        - `Experiment4.js` 

### Additional Files

#### `APIcalls.js`

Most of the API call functions, except for locomotion, are defined here. This is also where the default values are defined.

#### `Actions.js`

API call functions related to locomotion are defined.

#### `LightSocket.js`

This is a file that is directly taken from Misty Robotics. It provides an easier way to use the websockets to conenct to the robot.

#### `Texts.js`

All utterances (that would be passed on in a speak command) are defined.

## Issue

#### Checkbox status being shared across conditions

There is an issue of the status of checkbox being shared across conditions. For example, if checkbox was clicked for condition 1 in the Online Experiment 2, for all of the conditions in that experiment, checkbox appear as clicked. 

