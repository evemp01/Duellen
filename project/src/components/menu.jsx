import "../styles/menu.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="alignright">
      <button className='exitButton' onClick={() => navigate(-1)}>x</button>
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
