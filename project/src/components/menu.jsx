import "../styles/menu.css";
import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="alignright">
        <Link to={"/Who_won"}>
          <button className="exitButton" onClick={() => {}}>
            x
          </button>
        </Link>
      </div>
      <div className="aligncenter">
        <button className="editPlayer" onClick={() => {}}>
          Redigera spelare
        </button>
      </div>
      <div className="aligncenter">
        <button className="toplist" onClick={() => {}}>
          Topplista
        </button>
      </div>
      <div className="aligncenter">
        <button className="exitGame" onClick={() => {}}>
          Avsluta spel
        </button>
      </div>
    </div>
  );
};

export default Menu;
