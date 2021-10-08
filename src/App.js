import "./App.css";
import NavBar from "./Components/NavBar/navBar";
import Timer from "./Components/TimerCircle/timer";
import Calender from "./Components/Calender/calender";
import Chart from "./Components/Chart/chart";
import Date from "./Components/Date/date";
import ProgressCircle from "./Components/ProgressCircle/progressCircle";
import SecondCircle from "./Components/SecondCircle/secondCircle";
function App() {
  return (
    <div className="App">
      <div className="app__container">
        <NavBar />

        <div class="vertical"></div>
        <Timer />
        <Calender />
        <Chart />
        <Date />
        <ProgressCircle />
        <SecondCircle />
      </div>
    </div>
  );
}

export default App;
