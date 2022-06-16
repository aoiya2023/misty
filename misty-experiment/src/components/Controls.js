// import { startStreaming, stopStreaming } from "./AvStreaming";
import { startAvStreaming, stopAvStreaming, enableAvStreamingService, disableAvStreamingService } from "./APIcalls";

/**
 * AV Streaming
 */

// Streaming URL: rtsp://172.28.92.36:1936

// Stops code execution for a set amount of time.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Start streaming by enabling the av streaming service and then posting API call.
async function startStreaming(ip) {
    enableAvStreamingService(ip);
    await sleep(2000);
    startAvStreaming(ip);

}

// Stop streaming by first calling the API and then disabling the streaming service.
async function stopStreaming(ip) {
    stopAvStreaming(ip);
    await sleep(2000);
    disableAvStreamingService(ip);
}


export default function Controls(props) {
    return (
        <div>
            <h3>Experiment Controls</h3>
            <button onClick={() => startStreaming(props.ip)}>Start Streaming</button>
            <button onClick={() => stopStreaming(props.ip)}>Stop Streaming</button>

        </div>

        
    )
}