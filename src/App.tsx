import "./index.css";
import browser from "webextension-polyfill";

const bocchiUrl = browser.runtime.getURL(
  "assets/bocchi-the-rock-bocchi-the-rock-gif.gif"
);

function App() {
  return (
    <div
      className="absolute inset-0 w-full h-full flex justify-center items-center bg-repeat bg-[length:auto] bg-center"
      style={{
        backgroundImage: `url(${bocchiUrl})`,
        backgroundSize: "auto", // Maintains aspect ratio
      }}
    ></div>
  );
}

export default App;
