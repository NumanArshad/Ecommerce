import React, { useEffect, useState } from "react";
import Header from "./common/layouts/header";
import Root from "./routes";

function App() {
  const [isVisible, setVisible] = useState(true);
  const path = window.location.pathname.split("/");
  useEffect(() => {
    if (
      path.includes("admin") ||
      path.includes("login") ||
      path.includes("signup")
    ) {
      setVisible(false);
    }
  }, []);
  return (
    <>
      {isVisible && <Header />}
      <div class={!path.includes("admin") && "main"}>
        <Root />
      </div>
    </>
  );
}

export default App;
