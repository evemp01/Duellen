import "../styles/menu.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="alignright">
        <button className="exitButton" onClick={() => navigate(-1)}>
          x
        </button>
      </div>
      <Link to={"/EditPlayer"}>
        <div className="aligncenter">
          <button className="editPlayer">Redigera spelare</button>
        </div>
      </Link>
      <div className="aligncenter">
        <Link to={"/TopList"}>
          <button className="toplist" onClick={() => {}}>
            Topplista
          </button>
        </Link>
      </div>
      <div className="aligncenter">
        <Link to={"/Result"}>
          <button className="exitGame" onClick={() => {}}>
            Avsluta spel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
