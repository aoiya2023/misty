// import { startStreaming, stopStreaming } from "./AvStreaming";
import { startAvStreaming, stopAvStreaming, enableAvStreamingService, disableAvStreamingService, speak } from "./APIcalls";
import ReactionButtonPress from './ReactionButtonPress';
import "./Controls.css";

/**
 * AV Streaming
 */

// Streaming URL: rtsp://ayasuda:v35K+%GC:t]w%SM5@172.28.92.36:1936

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
        <div className="controls">
            <h3>Experiment Controls</h3>
            <div className="button-container">
                <button className="button" onClick={() => speak(props.ip, "I do not understand", "00L")}>Speak Default (I don't understand)</button>
                <div className="stream-button">
                    <button className="button" onClick={() => startStreaming(props.ip)}>Start Streaming</button>
                    <button className="button" onClick={() => stopStreaming(props.ip)}>Stop Streaming</button>
                </div>

                <ReactionButtonPress ip={props.ip}/>
            </div>
            
        </div>
    )
}