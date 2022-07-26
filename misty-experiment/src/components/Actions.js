import axios from "axios";

// Stops code execution for a set amount of time.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function leftArmUp(ip) {
    let arms0 = {
        "LeftArmPosition": -90,
        "RightArmPosition": 90,
        "LeftArmVelocity": 100,
        "RightArmVelocity": 100
    };
    let arms1 = {
        "LeftArmPosition": 90,
        "RightArmPosition": 90,
        "LeftArmVelocity": 80,
        "RightArmVelocity": 100
    };
    axios.post("http://" + ip + "/api/arms/set", arms0);
    await sleep(2000);
    axios.post("http://" + ip + "/api/arms/set", arms1);
    
}

export async function question(ip, pause=false) {
    let head0 = {
        "Pitch": 0,
        "Roll": -42,
        "Yaw": 0,
        "Velocity": 100
    }
    let head1 = {
        "Pitch": 0,
        "Roll": 0,
        "Yaw": 0,
        "Velocity": 100
    }
    if (pause) {
        await sleep(2000);
    }
    axios.post("http://" + ip + "/api/head", head0)
    await sleep(3000);
    axios.post("http://" + ip + "/api/head", head1);
}

export async function bothArmsUp(ip) {
    let arms0 = {
        "LeftArmPosition": -90,
        "RightArmPosition": -90,
        "LeftArmVelocity": 100,
        "RightArmVelocity": 100
    };
    let arms1 = {
        "LeftArmPosition": 90,
        "RightArmPosition": 90,
        "LeftArmVelocity": 100,
        "RightArmVelocity": 100
    };
    axios.post("http://" + ip + "/api/arms/set", arms0);
    await sleep(2000);
    axios.post("http://" + ip + "/api/arms/set", arms1);
}

export async function tilt(ip, pause=false) {
    let head0 = {
        "Pitch": 0,
        "Roll": 42,
        "Yaw": 0,
        "Velocity": 100
    }
    let head1 = {
        "Pitch": 0,
        "Roll": 0,
        "Yaw": 0,
        "Velocity": 100
    }
    if (pause) {
        await sleep(2000);
    }
    axios.post("http://" + ip + "/api/head", head0)
    await sleep(3000);
    axios.post("http://" + ip + "/api/head", head1);
}

export async function action3(ip) {
    let arms0 = {
        "LeftArmPosition": -90,
        "RightArmPosition": 90,
        "LeftArmVelocity": 100,
        "RightArmVelocity": 100
    };
    let arms1 = {
        "LeftArmPosition": 90,
        "RightArmPosition": 90,
        "LeftArmVelocity": 80,
        "RightArmVelocity": 100
    };
    let arms2 = {
        "LeftArmPosition": -90,
        "RightArmPosition": -90,
        "LeftArmVelocity": 100,
        "RightArmVelocity": 100
    };
    let head0 = {
        "Pitch": -10,
        "Roll": 0,
        "Yaw": 0,
        "Velocity": 100
    }
    let head1 = {
        "Pitch": 0,
        "Roll": 0,
        "Yaw": 0,
        "Velocity": 100
    }
    let head2 = {
        "Pitch": 10,
        "Roll": 0,
        "Yaw": 0,
        "Velocity": 100
    }

    // Hi (leftArmUp)
    axios.post("http://" + ip + "/api/arms/set", arms0);
    await sleep(2000);
    axios.post("http://" + ip + "/api/arms/set", arms1);
    
    // for control: 1000, others: 4000
    await sleep(1000);

    // It is nice to meet you (bothArmsUp + lookup)
    axios.post("http://" + ip + "/api/arms/set", arms2);
    axios.post("http://" + ip + "/api/head", head0);
    await sleep(2000);
    axios.post("http://" + ip + "/api/arms/set", arms1);
    axios.post("http://" + ip + "/api/head", head1);
    await sleep(7000);
    
    // await sleep(3000);
    // but I am only ... (look down)
    axios.post("http://" + ip + "/api/head", head2);
    await sleep(3000);
    axios.post("http://" + ip + "/api/head", head1);
    // other: 9000 control: 7000
    await sleep(7000);

    // mostly, I interact with people (bothArmsUp)
    axios.post("http://" + ip + "/api/arms/set", arms2);
    await sleep(2000);
    axios.post("http://" + ip + "/api/arms/set", arms1);

}