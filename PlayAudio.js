let speech = {
    "Text": "",
    "Flush": false,
    "UtteranceId": ""
};

document.addEventListener('keydown', keyPressed)

/* 
 * 
 * Speech functions
 * 
 * Each function only takes care of changing the speech json data, and then calls on speak()
*/ 
function speech001() {
    speech["Text"] = "<speak>Hi, I am B34, my pronouns are they, them, theirs how about you?</speak>";
    speech["UtteranceId"] = "001";
    speak(speech);
}

function speech002() {
    speech["Text"] = "<speak>Hi, I am B34, my pronouns are it, it, its how about you?</speak>";
    speech["UtteranceId"] = "002";
    speak(speech);
}

function speech003() {
    speech["Text"] = "<speak>Nice to meet you! I have some questions to get to know you. What is your favorite color?</speak>";
    speech["UtteranceId"] = "003";
    speak(speech);
}

function speech004() {
    speech["Text"] = "<speak>Cool!  Mine is fuchsia!</speak>";
    speech["UtteranceId"] = "004";
    speak(speech);
}

function speech005() {
    speech["Text"] = "<speak>What is your favorite animal?</speak>";
    speech["UtteranceId"] = "005";
    speak(speech);
}

function speech006() {
    speech["Text"] = "<speak>Mine is a goose, even though I have never seen one! </speak>";
    speech["UtteranceId"] = "006";
    speak(speech);
}

function speech00Q() {
    speech["Text"] = "<speak>I am B thirty four!</speak>";
    speech["UtteranceId"] = "00Q";
    speak(speech);
}

function speech00W() {
    speech["Text"] = "<speak>four times four is sixteen</speak>";
    speech["UtteranceId"] = "00W";
    speak(speech);
}

function speech00E() {
    speech["Text"] = "<speak>It was to go for. for. for. for. more like when to do as much as is like is not a bad thing.</speak>";
    speech["UtteranceId"] = "00E";
    speak(speech);
}

function speech00R() {
    speech["Text"] = "<speak>I like to have conversations with people! </speak>";
    speech["UtteranceId"] = "00R";
    speak(speech);
}

function speech00T() {
    speech["Text"] = "<speak>It is twenty!</speak>";
    speech["UtteranceId"] = "00T";
    speak(speech);
}

function speech00Y() {
    speech["Text"] = "<speak>I charging in the lab.</speak>";
    speech["UtteranceId"] = "00Y";
    speak(speech);
}

function speech00U() {
    speech["Text"] = "<speak>I am in Claremont, near Los Angeles</speak>";
    speech["UtteranceId"] = "00U";
    speak(speech);
}

function speech00I() {
    speech["Text"] = "<speak>a T-rex x that linguistics, meanings for contemplated of life, penguin sentience sentence</speak>";
    speech["UtteranceId"] = "00I";
    speak(speech);
}

function speech00O() {
    speech["Text"] = "<speak>To talk with me!</speak>";
    speech["UtteranceId"] = "00O";
    speak(speech);
}

function speech00P() {
    speech["Text"] = "<speak>I am in New York</speak>";
    speech["UtteranceId"] = "00P";
    speak(speech);
}

function speech00A() {
    speech["Text"] = "<speak>Not right now, but I would look good in a bucket hat!</speak>";
    speech["UtteranceId"] = "00A";
    speak(speech);
}

function speech00S() {
    speech["Text"] = "<speak>Talking with you!</speak>";
    speech["UtteranceId"] = "00S";
    speak(speech);
}

function speech00D() {
    speech["Text"] = "<speak>It is 2022!</speak>";
    speech["UtteranceId"] = "00D";
    speak(speech);
}

function speech00F() {
    speech["Text"] = "<speak>I have one heads, I have two arm, I have two eyes, and  I have no leg</speak>";
    speech["UtteranceId"] = "00F";
    speak(speech);
}

function speech00G() {
    speech["Text"] = "<speak>That is Tuesday!</speak>";
    speech["UtteranceId"] = "00G";
    speak(speech);
}

function speech00H() {
    speech["Text"] = "<speak>Saturday</speak>";
    speech["UtteranceId"] = "00H";
    speak(speech);
}

function speech00J() {
    speech["Text"] = "<speak>I don’t know about the months.</speak>";
    speech["UtteranceId"] = "00J";
    speak(speech);
}


function keyPressed(e) {
    console.log("key press event " + `${e.code}`)

    if (e.code === 'Digit1') {
        speech["Text"] = "<speak>Hi, I am B34, my pronouns are they, them, theirs how about you?</speak>"
        speech["UtteranceId"] = "001"

        var button = document.getElementById("001");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
    }

    if (e.code === 'Digit2') {
        speech["Text"] = "<speak>Hi, I am B34, my pronouns are it, it, its how about you?</speak>";
        speech["UtteranceId"] = "002";
    
        var button = document.getElementById("002");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'Digit3') {
        speech["Text"] = "<speak>Nice to meet you! I have some questions to get to know you. What is your favorite color?</speak>";
        speech["UtteranceId"] = "003";

        var button = document.getElementById("003");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'Digit4') {
        speech["Text"] = "<speak>Cool!  Mine is fuchsia!</speak>";
        speech["UtteranceId"] = "004";
    
        var button = document.getElementById("004");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'Digit5') {
        speech["Text"] = "<speak>What is your favorite animal?</speak>";
        speech["UtteranceId"] = "005";

        var button = document.getElementById("005");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'Digit6') {
        speech["Text"] = "<speak>Mine is a goose, even though I have never seen one! </speak>";
        speech["UtteranceId"] = "006";
    
        var button = document.getElementById("006");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyQ') {
        speech["Text"] = "<speak>I am B thirty four!</speak>";
        speech["UtteranceId"] = "00Q";

        var button = document.getElementById("00Q");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyW') {
        speech["Text"] = "<speak>four times four is sixteen</speak>";
        speech["UtteranceId"] = "00W";

        var button = document.getElementById("00W");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyE') {
        speech["Text"] = "<speak>It was to go for. for. for. for. more like when to do as much as is like is not a bad thing.</speak>";
        speech["UtteranceId"] = "00E";

        var button = document.getElementById("00E");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyR') {
        speech["Text"] = "<speak>I like to have conversations with people! </speak>";
        speech["UtteranceId"] = "00R";

        var button = document.getElementById("00R");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyT') {
        speech["Text"] = "<speak>It is twenty!</speak>";
        speech["UtteranceId"] = "00T";

        var button = document.getElementById("00T");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyY') {
        speech["Text"] = "<speak>I charging in the lab.</speak>";
        speech["UtteranceId"] = "00Y";

        var button = document.getElementById("00Y");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyU') {
        speech["Text"] = "<speak>I am in Claremont, near Los Angeles</speak>";
        speech["UtteranceId"] = "00U";

        var button = document.getElementById("00U");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyI') {
        speech["Text"] = "<speak>a T-rex x that linguistics, meanings for contemplated of life, penguin sentience sentence</speak>";
        speech["UtteranceId"] = "00I";

        var button = document.getElementById("00I");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyO') {
        speech["Text"] = "<speak>To talk with me!</speak>";
        speech["UtteranceId"] = "00O";

        var button = document.getElementById("00O");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyP') {
        speech["Text"] = "<speak>I am in New York</speak>";
        speech["UtteranceId"] = "00P";

        var button = document.getElementById("00P");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyA') {
        speech["Text"] = "<speak>Not right now, but I would look good in a bucket hat!</speak>";
        speech["UtteranceId"] = "00A";

        var button = document.getElementById("00A");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyS') {
        speech["Text"] = "<speak>Talking with you!</speak>";
        speech["UtteranceId"] = "00S";

        var button = document.getElementById("00S");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyD') {
        speech["Text"] = "<speak>It is 2022!</speak>";
        speech["UtteranceId"] = "00D";

        var button = document.getElementById("00D");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyF') {
        speech["Text"] = "<speak>I have one heads, I have two arm, I have two eyes, and  I have no leg</speak>";
        speech["UtteranceId"] = "00F";

        var button = document.getElementById("00F");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyG') {
        speech["Text"] = "<speak>That is Tuesday!</speak>";
        speech["UtteranceId"] = "00G";

        var button = document.getElementById("00G");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyH') {
        speech["Text"] = "<speak>Saturday</speak>";
        speech["UtteranceId"] = "00H";

        var button = document.getElementById("00H");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
    if (e.code === 'KeyJ') {
        speech["Text"] = "<speak>I don’t know about the months.</speak>";
        speech["UtteranceId"] = "00J";

        var button = document.getElementById("00J");
        if (button.checked === false) {
            button.checked = true;
        }
        speak(speech);
        
    }
}

function speak(text) {
    axios.post("http://" + ip + "/api/tts/speak", text)
        .then(function (response) {
        console.log(`speak was a ${response.data.status}`);
        })
        .catch(function (error) {
            console.log(`There was an error with the request ${error}`);
        })
}