import React, { useEffect } from "react";
import { useState, useContext } from "react";
import "../css/Eval.css";
import { useAuth0 } from "@auth0/auth0-react";
import e from "express";
import { useNavigate } from "react-router-dom";
import MyContext from "./MyContext";
import { error } from "console";



interface myProps {
  proy: number;
  category: number;
}

interface catDic {
  [key: number]: string;
}

interface descEvals {
  [key:number]: string;
}

interface desPreg {
  [key:number]: string;
}

function Eval({ proy, category }: myProps) {
  const catDic: catDic = {
    1: "Academica Digital",
    2: "Academica PPA",
    3: "Intermedio Digital",
    4: "Intermedio PPA",
    5: "Avanzada PPA",
    6: "Avanzada Digital",
  };

  const descEvals: descEvals = {
    1: "",
    2: "",
  }

  const context = useContext(MyContext)

  if(!context){
    throw new Error('Used context out provider')
  }

  const descPreg:desPreg = {
    1: "La exposición oral permite al juez comprender la necesidad que cubre el proyecto en un ámbito social o industrial.",
    2: "El equipo utiliza debidamente presentaciones digitales, utilería u otros medios que facilitan el entendimiento del proyecto",
    3: "El equipo menciona el tipo de innovación propuesta por el proyecto y cumple con la misma.",
    4: "La exposición oral permite al juez entender todos los conceptos relacionados al proyecto, de manera concisa y clara.",
    5: "El equipo presenta una vista previa de como debería de ser el proyecto y/o muestra algunas de las funcionalidades",
    6: "El equipo justifica debidamente el impacto que tiene su proyecto en todos los objetivos de la ONU mencionados",
    7: "El equipo responde de manera rápida, adecuada y precisa a las preguntas realizadas, mostrando dominio del tema.",
    8: "El equipo decoró el stand de manera adecuada para atraer a los visitantes y generar expectativa.",
    9: "La propuesta del equipo muestra claramente las implicaciones matemáticas que conlleva su proyecto.",
   10: "El equipo muestra un prototipo donde se muestra la funcionalidad del proyecto en su totalidad o casi total (75%).",
   11: "El equipo muestra un producto con una interfaz que es amigable a la vista, de fácil entendimiento y uso para el usuario final"
  }


  const {value, setValue} = context

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

    setValue(true)

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
                <div className="left-desc">
                  <div className="desc">{rubq.pregunta}</div>
                  <div className="inner-desc"><span>{descPreg[rubq.idPregunta]}</span></div>
                </div>
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
