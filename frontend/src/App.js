import React from "react";

import "./style/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./routes";

import { Toaster } from "react-hot-toast";
import { GlobalProvider } from "./context/index";

const App = () => {
  return (
    <GlobalProvider>
      <Routes />
      <Toaster position="top-right" duration="4000" />
    </GlobalProvider>
  );
};

export default App;
