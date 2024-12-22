import { createRoot } from "react-dom/client";
import App from "./App";

export function injectReact(elt: JSX.Element) {
  // Create the Shadow DOM and attach it to the page
  const container = document.createElement("div");
  container.id = "gorogoro-bocchi";
  const shadowRoot = container.attachShadow({ mode: "open" });
  document.body.appendChild(container);

  // Mount the React App inside the Shadow DOM
  const shadowRootContainer = document.createElement("div");
  shadowRoot.appendChild(shadowRootContainer);
  const root = createRoot(shadowRootContainer);
  root.render(elt); // Render react component
}

injectReact(<App />);
