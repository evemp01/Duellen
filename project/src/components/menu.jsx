import "../styles/menu.css";
import "../styles/exitButton.css";
import "../styles/exitGame.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="alignRight">
        <button className="exitButton" onClick={() => navigate(-1)}>
          x
        </button>
      </div>
      <div className="alignMeny">
      <Link to={"/EditPlayer"}>
        <div className="aligncenter">
          <button className="editPlayer">Redigera spelare</button>
        </div>
      </Link>

      <Link to={"/TopList"}>
        <div className="aligncenter">
          <button className="toplist" onClick={() => { }}>
            Topplista
          </button>
        </div>
      </Link>

      <div className="alignExitGame">
        <Link to={"/Result"}>
          <button className="exitGame" onClick={() => { }}>
            Avsluta spel
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Menu;
