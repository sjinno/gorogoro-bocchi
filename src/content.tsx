import { createRoot } from "react-dom/client";
import App from "./App";
import browser from "webextension-polyfill";

export function injectReact(elt: JSX.Element) {
  // Create the Shadow DOM and attach it to the page
  const container = document.createElement("div");
  container.id = "gorogoro-bocchi";
  const shadowRoot = container.attachShadow({ mode: "open" });
  document.body.appendChild(container);

  // Inject Tailwind CSS
  injectTailwindCSS(shadowRoot);

  // Mount the React App inside the Shadow DOM
  const shadowRootContainer = document.createElement("div");

  {
    shadowRootContainer.style.position = "fixed";
    shadowRootContainer.style.top = "0";
    shadowRootContainer.style.left = "0";
    shadowRootContainer.style.width = "100%";
    shadowRootContainer.style.height = "100%";
  }

  shadowRoot.appendChild(shadowRootContainer);
  const root = createRoot(shadowRootContainer);
  root.render(elt); // Render react component
}

function injectTailwindCSS(shadowRoot: ShadowRoot) {
  // Fetch the Tailwind CSS file
  fetch(browser.runtime.getURL("style.css"))
    .then((response) => response.text()) // Read the content as text
    .then((css) => {
      // Replace :root with :host for Shadow DOM scoping
      const modifiedCSS = css.replace(/:root/g, ":host");

      // Create a <style> element
      const styleElement = document.createElement("style");
      styleElement.textContent = modifiedCSS;

      // Append the modified styles to the Shadow DOM
      shadowRoot.appendChild(styleElement);
    })
    .catch((error) => {
      console.error("Failed to load or modify Tailwind CSS:", error);
    });
}

injectReact(<App />);
