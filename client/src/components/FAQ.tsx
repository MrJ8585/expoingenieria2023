/** @format */

import React, { useState } from "react";
import "../css/FAQ.css";

function FAQ() {
  const [active, setActive] = useState<any>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
  });

  const handleClick = (id: number) => {
    setActive((prev: any) => ({ ...prev, [id]: !active[id] }));
  };

  return (
    <div className="body">
      <div className="head-faq">
        <div className="side-deco"></div>
        <div>
          <span>
            <b>¿</b>En qué te podemos <b>ayudar?</b>
          </span>
        </div>
        <div className="side-deco-2"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="container-faq">
            <div className="tittle-faq"></div>

            <div className="item-faq" onClick={() => handleClick(1)}>
              <div className="question">
                <h3>¿Cuándo es ExpoIngeniería?</h3>
                <div className="more">
                  <i>+</i>
                </div>
              </div>
              <div className={active[1] ? "active-answer" : "answer"}>
                <p>La ExpoIngeniería iniciará el martes 16 de mayo del 2023.</p>
                <div className="less">
                  <i></i>
                </div>
              </div>
            </div>
            <div className="item-faq" onClick={() => handleClick(2)}>
              <div className="question">
                <h3>¿Cuáles son las etapas del evento?</h3>
                <div className="more">
                  <i>+</i>
                </div>
              </div>
              <div className={active[2] ? "active-answer" : "answer"}>
                <p>
                  Las presentaciones presenciales de los proyectos se llevarán a
                  cabo el 16 y la mañana del 17 de mayo. Las presentaciones en
                  línea serán por la tarde del 17 de mayo. El 19 de mayo se
                  realizará el Innovation Challenge y la premiación. Para
                  finalizar habrá actividades recreativas y una comida como
                  cierre de actividades.
                </p>
                <div className="less">
                  <i></i>
                </div>
              </div>
            </div>
            <div className="item-faq" onClick={() => handleClick(3)}>
              <div className="question">
                <h3>¿Dónde subo mi proyecto?</h3>
                <div className="more">
                  <i>+</i>
                </div>
              </div>
              <div className={active[3] ? "active-answer" : "answer"}>
                <p>
                  En la página de tu proyecto tendrás acceso a subir la
                  información relacionada al enlace de video de youtube y el
                  enlace de google meet para las sesiones en línea.
                </p>
                <div className="less">
                  <i></i>
                </div>
              </div>
            </div>
            <div className="item-faq" onClick={() => handleClick(4)}>
              <div className="question">
                <h3>¿Qué horarios hay de exposición presencial?</h3>
                <div className="more">
                  <i>+</i>
                </div>
              </div>
              <div className={active[4] ? "active-answer" : "answer"}>
                <p>Martes 16 de mayo de 9 a.m. a 2 p.m. y 4 p.m. a 7 p.m.</p>
                <p>miércoles 17 de mayo de 9 a.m. a 2 p.m.</p>
                <div className="less">
                  <i></i>
                </div>
              </div>
            </div>
            <div className="item-faq" onClick={() => handleClick(5)}>
              <div className="question">
                <h3>¿Qué horarios hay de exposición virtual?</h3>
                <div className="more">
                  <i>+</i>
                </div>
              </div>
              <div className={active[5] ? "active-answer" : "answer"}>
                <p>Miércoles 17 de mayo de 4 p.m. a 7 p.m.</p>
                <div className="less">
                  <i></i>
                </div>
              </div>
            </div>
            <div className="item-faq" onClick={() => handleClick(6)}>
              <div className="question">
                <h3>¿Qué tipos de proyectos puedo ver en cada categoría?</h3>
                <div className="more">
                  <i>+</i>
                </div>
              </div>
              <div className={active[6] ? "active-answer" : "answer"}>
                <p>
                  <b>Existen dos tipos: digitales y proceso, producto y
                  automatización (PPA).</b> Un proyecto digital tiene como fin
                  último un desarrollo de tipo software o gráfico. Un proyecto
                  PPA tiene como enfoque principal un desarrollo donde habrá
                  una implementación física o un sistema físico se va a ver
                  afectado.
                </p>
                <div className="less">
                  <i></i>
                </div>
              </div>
            </div>
            <div className="item-faq" onClick={() => handleClick(7)}>
              <div className="question">
                <h3>¿En qué consisten las categorías?</h3>
                <div className="more">
                  <i>+</i>
                </div>
              </div>
              <div className={active[7] ? "active-answer" : "answer"}>
                <p>
                  <b>Académico:</b> Proyectos que están en su fase inicial, mostrando
                  mayoritariamente ideas conceptuales o alguna maqueta del
                  proyecto que buscan realizar. Estos proyectos están limitados
                  a alumnos de 2do semestre.<br/><b>Intermedio:</b> Proyectos que están en
                  una fase de desarrollo, mostrando prototipos con
                  funcionalidades parciales. Estos proyectos están limitados a
                  alumnos de 2do a 4to semestre.<br/><b>Avanzado:</b> Proyectos que están
                  en su fase final, los cuales están realizados en su totalidad
                  o cuentan con un prototipo final. Estos proyectos están
                  limitados a alumnos de 6to semestre en adelante.
                </p>
                <div className="less">
                  <i></i>
                </div>
              </div>
            </div>
            <div className="item-faq" onClick={() => handleClick(8)}>
              <div className="question">
                <h3>Si soy juez, ¿Comó puedo evaluar?</h3>
                <div className="more">
                  <i>+</i>
                </div>
              </div>
              <div className={active[8] ? "active-answer" : "answer"}>
                <p>
                  Una vez que haya iniciado sesión con su correo, en la pestaña
                  proyectos, seleccionará la categoría a la que pertenece el
                  proyecto y lo redirigirá a otra página donde aparecerán los
                  proyectos de dicha categoría. Ahí seleccionará el proyecto que
                  quiera evaluar, y en la parte de abajo, le aparecerá un botón
                  para poder calificar el proyecto.
                </p>
                <div className="less">
                  <i></i>
                </div>
              </div>
            </div>
            <div className="item-faq" onClick={() => handleClick(10)}>
              <div className="question">
                <h3>¿Me tengo que registrar?</h3>
                <div className="more">
                  <i>+</i>
                </div>
              </div>
              <div className={active[10] ? "active-answer" : "answer"}>
                <p>
                  No, solo el día lunes 16 de mayo que el evento es presencial.
                </p>
                <div className="less">
                  <i></i>
                </div>
              </div>
            </div>
            <div className="item-faq" onClick={() => handleClick(12)}>
              <div className="question">
                <h3>¿Tiene costo?</h3>
                <div className="more">
                  <i>+</i>
                </div>
              </div>
              <div className={active[12] ? "active-answer" : "answer"}>
                <p>No, es completamente gratis.</p>
                <div className="less">
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
