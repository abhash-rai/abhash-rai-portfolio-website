import "./App.css";
import GradientCursor from "./Components/GradientCursor";
import StickyBoxComponent from "./Components/StickyBoxComponent";

function App() {
  return (
    <div className="App h-[200vh]">
      <GradientCursor />
      <div className="h-[200vh] z-[1]">
        <StickyBoxComponent />
      </div>
    </div>
  );
}

export default App;
