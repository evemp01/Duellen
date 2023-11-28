import "../styles/Rules.css";
import { useNavigate } from "react-router-dom";
const Rules = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="alignRight">
        <button className="exitButton" onClick={() => navigate(-1)}>
          x
        </button>
      </div>
      <div className="alignRules">
        <h1>Spelregler</h1>
        <div className="rulesDiv">
          <ol className="rulesInnerDiv">
            <li>Lägg till alla spelare som ska vara med genom att skriva in spelarens namn i inmatningsfältet och därefter trycka på "plus" eller enter.</li><br></br>
            <li>När alla spelare lagts till tryck på "Start". (För att kunna spela behöver minst tre spelare vara tillagda)</li><br></br>
            <li>Två namn kommer visas på skärmen, dessa två spelare ska direkt köra utmaningen som står i rutan under.</li><br></br>
            <li>När spelarna har kört utmaningen tryck på "Nästa"</li><br></br>
            <li>Den som förlorade utmaningen dricker de antal klunkar som står på skärmen.</li><br></br>
            <li>Klicka därefter på spelaren som vann utmaningen</li><br></br>
            <li>Nu är det två nya spelares tur! Fortsätt spelet så länge ni vill! När ni känner er klara tryck på meny knappen uppe i högra hörnet, tryck därefter på "Avsluta spel" och därefter på "Avsluta spel" igen."</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Rules;
