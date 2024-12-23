import { useEffect } from "react";
import "../index.css";
import "./Popup.css";
import browser from "webextension-polyfill";

export default function () {
  useEffect(() => {
    console.log("Hello frm the popup!");
  }, []);

  const handleClick = async () => {
    try {
      // Send a message to the active tab's content script
      const [tab] = await browser.tabs.query({
        active: true,
        currentWindow: true,
      });

      const response = await browser.tabs.sendMessage(tab.id ?? 0, {
        action: "bocchiTime",
      });

      if (response?.success) {
        console.log("Content script function executed successfully!");
      } else {
        console.log("Failed to execute content script function.");
      }
    } catch (error) {
      console.error("Failed to send message to content script:", error);
    } finally {
      window.close();
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Bocchi Time!
      </button>
    </div>
  );
}
