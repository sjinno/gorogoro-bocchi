import { useEffect } from "react";
import "./Popup.css";
import gorogoroBocchi from "../assets/bocchi-the-rock-bocchi-the-rock-gif.gif";

export default function () {
  useEffect(() => {
    console.log("Hello frm the popup!");
  }, []);

  const handleClick = () => {
    alert("Bocchi Time!");
  };

  return (
    <div>
      <button onClick={handleClick}>Bocchi Time!</button>
    </div>
  );
}
