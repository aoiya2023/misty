// import axios from 'axios';
import './App.css';
import Controls from './components/Controls';
import Experiment1 from './components/Experiment1';
import Experiment2 from './components/Experiment2';



const ip = "192.168.0.7";
// let data = {
//   "red": 255,
//   "green": 43,
//   "blue": 255
// };
// function changeLED() {
//   axios.post("http://" + ip + "/api/led", data)
//   .then(function (response) {
//       console.log(`ChangeLED was a ${response.data.status}`);
//   })
//   .catch(function (error) {
//       console.log(`There was an error with the request ${error}`);
//   })
// }


function App() {
  return (
    <div className="App">
        <Controls ip={ip}/>
        <Experiment1/>
        <Experiment2/>
    </div>
  );
}

export default App;
