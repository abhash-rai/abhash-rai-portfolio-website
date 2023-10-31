import "./App.css";
import GradientCursor from "./Components/GradientCursor";
import StickyBoxComponent from "./Components/StickyBoxComponent";
import MainContext from "./Components/MainContext";

function App() {
  const main_title_classes = "font-bold text-[40px] sm:text-5xl xl:text-5xl";
  const headings_classes = "font-normal text-xl xl:text-2xl";
  const normal_classes = "font-normal text-[17px]";
  const small_classes = "font-normal text-[15px]";
  const gray_color = "text-[#8092b5]";
  const text_hover_classes =
    "hover:text-[#45DBE2] transition-all duration-300 ease-in-out";

  return (
    <MainContext.Provider
      value={{
        main_title_classes,
        headings_classes,
        normal_classes,
        small_classes,
        gray_color,
        text_hover_classes,
      }}
    >
      <div className="App container mx-auto h-[200vh]">
        <GradientCursor />
        <div className="h-full z-[1]">
          <StickyBoxComponent />
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
