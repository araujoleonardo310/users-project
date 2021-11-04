import React from "react";

import { useHistory } from "react-router-dom";

import "./style.scss";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Header = () => {
  const history = useHistory("/");

  const Direct = () => {
    history.push("/");
  };

  return (
    <header className="header">
      <h1>REQRES</h1>
      <div>
        <PersonIcon className="icon" />
        <ExitToAppIcon className="icon" onClick={() => Direct()} />
      </div>
    </header>
  );
};

export default Header;