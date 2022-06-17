// import axios from 'axios';
import './App.css';
import Controls from './components/Controls';
import Experiment1 from './components/Experiment1';
import Experiment2 from './components/Experiment2';



const ip = "192.168.0.7";



function App() {
  return (
    <div className="App">
        <Controls ip={ip}/>
        <Experiment1 ip={ip}/>
        <Experiment2 ip={ip}/>
    </div>
  );
}

export default App;
