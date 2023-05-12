import React, { useState } from 'react'
import '../css/FAQ.css'

function FAQ() {

    const [active, setActive] = useState<any>({
        1:false,
        2:false,
        3:false,
        4:false,
        5:false,
        6:false,
        7:false,
        8:false,
        9:false,
        10:false,
        11:false,
        12:false,
        13:false
    })

    const handleClick = (id:number) => {
        setActive((prev: any) => ({...prev, [id]: !active[id]}))
    }

  return (

    <div className='body'>

        <div className='head-faq'>
            <div className='side-deco'>
            </div>
            <div>
                <span><b>¿</b>En qué te podemos <b>ayudar?</b></span>
            </div>
            <div className='side-deco-2'>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="container-faq">
                    <div className="tittle-faq">

                    </div>

                    <div className="item-faq" onClick={() => handleClick(1)}>
                        <div className="question">
                            <h3>¿Cuándo es ExpoIngenieria?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[1] ? "active-answer":"answer"}>
                            <p>17 de Mayo del 2023</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(2)}>
                        <div className="question">
                            <h3>¿Cuáles son las etapas del evento?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[2] ? "active-answer":"answer"}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(3)}>
                        <div className="question">
                            <h3>¿Dónde subo mi proyecto?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[3] ? "active-answer":"answer"}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(4)}>
                        <div className="question">
                            <h3>¿Qué horarios hay de exposición presencial?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[4] ? "active-answer":"answer"}>
                            <p>De 9 a.m. a 1 p.m. y 3 p.m. a 7 p.m. el lunes 16 de mayo.</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(5)}>
                        <div className="question">
                            <h3>¿Qué horarios hay de exposición virtual?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[5] ? "active-answer":"answer"}>
                            <p>Martes y miércoles, 17 y 18 de mayo de 9 a.m. a 1 p.m. y 3 p.m. a 7 p.m.</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(6)}>
                        <div className="question">
                            <h3>¿Qué tipos de proyectos puedo ver en cada categoría?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[6] ? "active-answer":"answer"}>
                            <p>Proyectos académicos (de primeros semestres), proyectos de asignatura o independientes, proyectos ligados a empresas y proyectos de software y multimedia.</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(7)}>
                        <div className="question">
                            <h3>¿En que consisten las cateorías?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[7] ? "active-answer":"answer"}>
                            <p>Categorías de innovación de producto, de proceso, de software y/o multimedia. La categoría 1 es de fase inicial y la categoría 2 es de fase de implementación o prototipo funcional.</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(8)}>
                        <div className="question">
                            <h3>Si soy juez, ¿Comó puedo evaluar?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[8] ? "active-answer":"answer"}>
                            <a href="https://drive.google.com/file/d/1V51dlaEwAA738mcTsipyv0bak6fiXo3y/view">Vídeo tutorial</a>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(9)}>
                        <div className="question">
                            <h3>¿Puedo evaluar los proyectos si soy público geeral?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[9] ? "active-answer":"answer"}>
                            <p>Existirá una categoría de proyecto más votado por el público, la cual se podrá hacer el día lunes presencialmente.</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(10)}>
                        <div className="question">
                            <h3>¿Me tengo que registrar?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[10] ? "active-answer":"answer"}>
                            <p>No, solo el día lunes 16 de mayo que el evento es presencial.</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(11)}>
                        <div className="question">
                            <h3>¿También tendrán conferencias?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[11] ? "active-answer":"answer"}>
                            <p>Sí, en el congreso CIAP el día jueves 19 y viernes 20 de mayo.</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(12)}>
                        <div className="question">
                            <h3>¿Tiene costo?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[12] ? "active-answer":"answer"}>
                            <p>No, es gratis en ambas modalidades tanto las conferencias como los proyectos.</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                    <div className="item-faq" onClick={() => handleClick(13)}>
                        <div className="question">
                            <h3>¿Las conferencias serán virtuales?</h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className={active[13] ? "active-answer":"answer"}>
                            <p>Así es, las conferencias del congreso CIAP serán de manera virtual.</p>
                            <div className="less"><i></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FAQ