import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/ProyDisplay.css";

import { privUsers } from "../privUsers";
import { Objetivos } from "../objs";
import { useAuth0 } from "@auth0/auth0-react";
import Eval from "./Eval";
import EditPopup from "./EditPopup";

import MyContext from "./MyContext";

type SelectedProy = Record<string, any>;

interface proyInfo {
  [key: string]: string;
}

interface catDic {
  [key: number]: string;
}

function ProyDisplay() {

  const [value, setValue] = useState<boolean>(false)

  const { user } = useAuth0();

  const authUserEmail = user?.email ?? "unverified";

  const [verified, setVerified] = useState(false);

  const alreadyEval = async () => {
    let correo = user?.email;

    if (correo != undefined) {
      try {
        const response = await fetch(
          `/calificaciones/${selectedProy.idProyecto}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ correo: `${correo}` }),
          }
        );

        const data = await response.json();

        setEvals(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [evals, setEvals] = useState<any>([]);

  const [evalVerify, setEvalVerify] = useState(false)

  const verifyEval = () => {
    if (evals.length > 0) {
      return true
    } else {
      return false
    }
  };

  const verifyPrivs = () => {
    if (authUserEmail != "unverified") {
      if (privUsers.includes(authUserEmail)) {
        setVerified(true);
      } else {
        setVerified(false);
      }
    } else {
      setVerified(false);
    }
  };

  const params = useParams();

  const catId = params.cat_id!;

  const [selectedProy, setSelectedProy] = useState<SelectedProy>({
    idProyecto: 0,
    nombre_equipo: "",
    nombre_proyecto: "",
    descripcion_proyecto: "",
    link_zoom: null,
    link_video: null,
    categoria: 0,
    objetivos_onu: "",
    editable: false,
    innovacion: ""
  });

  const [fetchProys, setFetchProys] = useState<any>([]);

  const handleProys = async () => {
    try {
      const repsonse = await fetch(`/proyectos/${catId}`);
      const data = await repsonse.json();

      setFetchProys(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProys = () => {
    if (fetchProys.length > 0) {
      setSelectedProy({
        idProyecto: fetchProys[0].idProyecto,
        nombre_equipo: fetchProys[0].nombre_equipo,
        nombre_proyecto: fetchProys[0].nombre_proyecto,
        descripcion_proyecto: fetchProys[0].descripcion_proyecto,
        link_zoom: fetchProys[0].link_zoom,
        link_video: fetchProys[0].link_video,
        categoria: fetchProys[0].categoria,
        objetivos_onu: fetchProys[0].objetivos_onu,
        innovacion: fetchProys[0].innovacion
      });
    }
  };

  const ifSelected = (obj: any) => {
    if (obj.idProyecto == selectedProy.idProyecto) {
      return true;
    } else {
      return false;
    }
  };

  const objsCheck = (x: string): boolean => {
    let dummy: string[] = selectedProy.objetivos_onu.split(", ");
    return dummy.includes(x);
  };

  useEffect(() => {
    handleProys();
    verifyPrivs();
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    updateProys();
  }, [fetchProys]);

  const [objDisplay, setObjDisplay] = useState("");

  const handelHover = (obj: any) => {
    setObjDisplay(obj);
  };

  const handleHoverLeave = () => {
    setObjDisplay("");
  };

  const [editable, setEditable] = useState(false);

  const bringProy = async () => {
    try {
      let correo = user?.email;

      if (correo != undefined) {
        const repsonse = await fetch(`/proyecto/${selectedProy.idProyecto}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ correo: `${correo}` }),
        });

        const data = await repsonse.json();

        setEditable(data.editable);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    alreadyEval();
    bringProy();
  }, [selectedProy]);

  const catDicTitle: catDic = {
    1: "Academico Digital",
    2: "Academico PPA",
    3: "Intermedio Digital",
    4: "Intermedio PPA",
    5: "Avanzado PPA",
    6: "Avanzado Digital",
  };

  return (
    <div className="main-proydisplay">
      <div>
        <h1 id="title">{catDicTitle[parseInt(catId)]}</h1>
      </div>

      <div className="main-scroll">
        <div className="scroll-proys">
          {fetchProys.map((x: any) => {
            return (
              <div
                key={x.idProyecto}
                className={
                  ifSelected(x) ? "selected-proy-scroll" : "maped-proy"
                }
                onClick={() => {
                  setValue(false)
                  setSelectedProy({
                    idProyecto: x.idProyecto,
                    nombre_equipo: x.nombre_equipo,
                    nombre_proyecto: x.nombre_proyecto,
                    descripcion_proyecto: x.descripcion_proyecto,
                    link_zoom: x.link_zoom,
                    link_video: x.link_video,
                    categoria: x.categoria,
                    objetivos_onu: x.objetivos_onu,
                    innovacion: x.innovacion
                  });
                }}
              >
                <h2 key={x.idProyecto}>Proyecto {x.numero_proyecto}</h2>
              </div>
            );
          })}
        </div>
      </div>

      <div className="selected-proy">
        <div className="upper-box">
          <div className="inner-left">{/* <button>Button</button> */}</div>
          <div className="inner-middle">
            <div className="inner-upper-box">
              <div className="inner-left-box">
                <h2 style={{ textAlign: "left" }}>
                  {selectedProy.nombre_proyecto}
                </h2>

                <h3 style={{
                    textAlign: "left",
                    marginTop: ".5rem",
                    fontWeight: "400"
                  }}
                  >{selectedProy.innovacion}</h3>
                  
                <h2
                  style={{
                    textAlign: "left",
                    color: "#FFC122",
                    marginTop: ".5rem",
                  }}
                >
                  {selectedProy.nombre_equipo}
                </h2>

                <div className="links">
                  <button
                    onClick={() => {
                      if (selectedProy.link_video != null) {
                        window.location.href = selectedProy.link_video;
                      }
                    }}
                  >
                    <img
                      style={{ height: "20px" }}
                      src="https://i.ibb.co/JsYTckr/youtube.png"
                    />
                  </button>
                  <button
                    onClick={() => {
                      if (selectedProy.link_zoom != null) {
                        window.location.href = selectedProy.link_zoom;
                      }
                    }}
                  >
                    <img
                      style={{ height: "25px" }}
                      src="https://i.ibb.co/pdGLNHZ/meet.png"
                    />
                  </button>
                </div>
              </div>
              <div className="inner-right-box">
                <p>{selectedProy.descripcion_proyecto}</p>
              </div>
            </div>

            <div className="inner-bottom-box">
              <div className="main-objs">
                <div className="objs">
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo1)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("01") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/h1hrxGj/Vector.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo2)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("02") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/gd2jZr3/Vector-1.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo3)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("03") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/qNw6D1j/Vector-3.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo4)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("04") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/0MXtDb0/Vector-4.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo5)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("05") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/rtTX4mz/Vector-5.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo6)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("06") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/7ryQd7b/Vector-6.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo7)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("07") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "46px", borderRadius: "50px" }}
                      src="https://i.ibb.co/7NTVs5C/Proyecto-nuevo.jpg"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo8)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("08") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/ns1RKH1/Vector-7.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo9)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("09") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/R41zxrL/Vector-8.png"
                    />
                  </div>

                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo10)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("10") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/7kLnqJG/Vector-11.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo11)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("11") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/XYhL00z/Vector-12.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo12)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("12") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/9cpJJsm/Vector-13.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo13)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("13") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px", borderRadius: "50px" }}
                      src="https://i.ibb.co/YfX36m6/Proyecto-nuevo-1.jpg"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo14)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("14") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/vzT2DCp/Vector-14.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo15)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("15") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/XSsMvsY/Vector-15.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo16)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("16") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/r2fp8pY/Vector-16.png"
                    />
                  </div>
                  <div
                    onMouseEnter={() => handelHover(Objetivos.Objetivo17)}
                    onMouseLeave={handleHoverLeave}
                    className={objsCheck("17") ? "obj" : "obj-unactive"}
                  >
                    <img
                      style={{ height: "45px" }}
                      src="https://i.ibb.co/ftD4wsf/Vector-17.png"
                    />
                  </div>
                </div>
              </div>
              <div className="bottom-trigger">
                {editable ? (
                  <EditPopup
                    proyId={selectedProy.idProyecto}
                    correo={authUserEmail}
                  />
                ) : null}
              </div>
            </div>
          </div>

          <div className="inner-right"></div>
        </div>
      </div>

      <div className="obj-desc">
        <div className="obj-desc-content">{objDisplay}</div>
      </div>

      {verified ? (
        <div>
          {verifyEval() || value ? (
            <h1 id="message">Este proyecto ya fue evaluado</h1>
          ) : (
            <MyContext.Provider value={{value, setValue}}>
              <Eval proy={selectedProy.idProyecto} category={parseInt(catId)} />
            </MyContext.Provider>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default ProyDisplay;
