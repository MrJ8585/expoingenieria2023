import React, { useEffect } from "react";
import { useState } from "react";
import "../css/Eval.css";
import { useAuth0 } from "@auth0/auth0-react";
import e from "express";
import { useNavigate } from "react-router-dom";

interface myProps {
  proy: number;
  category: number;
}

interface catDic {
  [key: number]: string;
}

function Eval({ proy, category }: myProps) {
  const catDic: catDic = {
    1: "Academica Digital",
    2: "Academica PPA",
    3: "Intermedio Digital",
    4: "Intermedio PPA",
    5: "Avanzada PPA",
    6: "Avanazada Digital",
  };

  const [evalMode, setEvalMode] = useState(false);

  const [rubrica, setRubrica] = useState<Array<{}>>([]);

  const [cat, setCat] = useState<String>("");

  const { user } = useAuth0();

  const [cals, setCals] = useState<any>([]);

  const navigate = useNavigate();

  const evalCat = () => {
    setCat(catDic[category]);
  };

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const postEval = async (proyId: any, qId: any, cal: any) => {
    try {
      let correo = user?.email;

      const response = await fetch(`/calificar/${proyId}/${qId}/${cal}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo: `${correo}` }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEval = async () => {
    try {
      const response = await fetch(`/pregunta/${category}`, {
        method: "POST",
      });

      const data = await response.json();

      setRubrica(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    for (let i = 0; i < cals.length; i++) {
      if (cals[i] < 50) {
        cals[i] = 0;
      }

      postEval(proy, i + 1, cals[i]);
    }

    navigate("/categories");
  };

  useEffect(() => {
    getEval();
  }, []);

  useEffect(() => {
    evalCat();
  }, [category]);

  return (
    <div className="main-eval">
      <button
        className="eval-button"
        onClick={() => {
          setEvalMode(true);
        }}
      >
        Evaluar
      </button>

      {evalMode ? (
        <div className="eval-form">
          <div className="form-head">
            <button
              onClick={() => {
                setEvalMode(false);
              }}
            >
              Close
            </button>
          </div>

          <div className="title">
            <h1>Rubrica {cat}</h1>
          </div>

          <form className="main-eval-q" onSubmit={handleSubmit}>
            {rubrica.map((rubq: any) => (
              <div className="eval-maped" key={rubq.idPregunta}>
                <div className="desc">{rubq.pregunta}</div>
                <input
                  type="number"
                  required
                  min={0}
                  max={100}
                  onChange={(e) => {
                    cals[rubq.idPregunta - 1] = parseInt(e.target.value);
                  }}
                ></input>
              </div>
            ))}

            <div className="enviar">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Eval;
