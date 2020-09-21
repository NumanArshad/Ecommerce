import React, { useEffect, useState } from "react";
import Appbar from "./common/layouts/appbar";
import Root from "./routes";

function App() {
  const [isVisible, setVisible] = useState(true);
  const path = window.location.pathname.split("/");
  useEffect(() => {
    if (
      path.includes("admin") ||
      path.includes("login") ||
      // path.includes("signup") ||
      path.includes("seller")
    ) {
      setVisible(false);
    }
  }, []);
  return (
    <>
      {isVisible && <Appbar />}
      <div class={(!path.includes("admin") && !path.includes("seller")) && "main"}>
        <Root />
      </div>
    </>
  );
}

export default App;
