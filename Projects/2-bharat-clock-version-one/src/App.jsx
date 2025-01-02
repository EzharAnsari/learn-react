import "./App.css";
import AppName from "./components/AppName";
import Slogan from "./components/Slogan";
import Time from "./components/Time";

function App() {
  return (
    <div className="container text-center">
      <AppName></AppName>
      <Slogan></Slogan>
      <Time></Time>
    </div>
  );
}

export default App;
