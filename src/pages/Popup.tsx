import { useEffect } from "react";
import "./Popup.css";
import gorogoroBocchi from "../assets/bocchi-the-rock-bocchi-the-rock-gif.gif";

export default function () {
  useEffect(() => {
    console.log("Hello from the popup!");
  }, []);

  return (
    <div>
      <img src={gorogoroBocchi} />
    </div>
  );
}
