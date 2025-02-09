import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { initLightboxJS } from "lightbox.js-react";
import { useEffect } from "react";

function Root() {
  useEffect(() => {
    initLightboxJS("Insert your License Key here", "Insert plan type here");
  }, []);

  return (
    <Router>
      <App />
    </Router>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
