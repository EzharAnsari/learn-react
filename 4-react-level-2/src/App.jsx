import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomFragment from "./components/fragment";
import CustomMap from "./components/CustomMap";
import ConditionalRendering from "./components/ConditionalRendering";

function App() {
  return (
    <>
      {/* <CustomFragment></CustomFragment> */}
      {/* <CustomMap></CustomMap> */}
      <ConditionalRendering></ConditionalRendering>
    </>
  );
}

export default App;
