import { createContext } from "react";
import "./App.css";
import GradientCursor from "./Components/GradientCursor";
import StickyBoxComponent from "./Components/StickyBoxComponent";
import MainContext from "./Components/MainContext";

function App() {
  const main_title_classes = "font-bold text-[40px] sm:text-5xl xl:text-5xl";
  const headings_classes = "font-normal text-xl xl:text-2xl";
  const normal_classes = "font-normal text-[16px] xl:text-[16px]";
  const gray_color = "opacity-70";

  return (
    <MainContext.Provider
      value={{
        main_title_classes,
        headings_classes,
        normal_classes,
        gray_color,
      }}
    >
      <div className="App container mx-auto h-[200vh]">
        <GradientCursor />
        <div className="h-[200vh] z-[1]">
          <StickyBoxComponent />
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
