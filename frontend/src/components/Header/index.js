import React from "react";
import "./style.css";
import { GoPerson } from "react-icons/go";
import { IoMdExit } from "react-icons/io";

import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory("/");

    const Direct = () => {
        history.push("/");
    };

    return (
        <header className="header">
            <p className="title">Get Users</p>
            <div className="icons-container">
                <GoPerson className="icon" />
                <IoMdExit className="icon" onClick={() => Direct()} />
            </div>
        </header>
    );
};

export default Header;
