import React from "react";
import "./style/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./routes";
import { Toaster } from "react-hot-toast"
import { GlobalProvider } from "./context";

function App() {
  return (
    <GlobalProvider>
      <Routes />
      <Toaster positon="top-right" duration="4000" />
    </GlobalProvider>
  );
}

export default App;
