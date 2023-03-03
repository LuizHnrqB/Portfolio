import { React, useState } from "react";
import "./matSandBox1.css";
import { FiAlertCircle } from "react-icons/fi";
import Home from "../../Pages/home";

const MatSandBox1 = () => {
  const [isShown, setIsShown] = useState(false);
  const [temp, setTemp] = useState(0);
  const [count, setCount] = useState(0);

  let maxCount = localStorage.getItem("highScore");

  function refreshPage() {
    if (maxCount < count) {
      maxCount = count;
      localStorage.setItem("highScore", maxCount);
      window.location.reload(false);
    } else {
      window.location.reload(false);
    }
  }

  if (temp < 100) {
    return (
      <div className="buttonContainer">
        <div>
          <h1 className="aguaTitle">
            Mini-game: Não deixe a água fever! <FiAlertCircle />
            {isShown && <Home />}
          </h1>
        </div>
        <p>Clique o máximo de vezes, mas não deixe a água ferver!</p>
        <button
          onClick={() => {
            setTemp(temp + Math.random() * 8);
            setCount(count + 1);
          }}
        >
          Aumente a temperatura!
        </button>
        <p> Temperatura da água: {Math.floor(temp)} ºC</p>
        <p>Você clicou {count} vezes</p>
        <p>Seu recorde de cliques sem deixar a água ferver é de: {maxCount}</p>
        <div className="lineAgua"></div>
      </div>
    );
  } else {
    return (
      <div className="buttonContainer">
        <h1 className="aguaTitle"> Mini-game: Não deixe a água fever!</h1>
        <p>Você clicou {count} vezes</p>
        <p>Seu recorde de cliques sem deixar a água ferver é de: {maxCount}</p>
        <button
          className="buttonTryAgain"
          onClick={() => {
            refreshPage();
          }}
        >
          Tente Novamente
        </button>
        <div className="boiling-line"></div>
      </div>
    );
  }
};
export default MatSandBox1;
