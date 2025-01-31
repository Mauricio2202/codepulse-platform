import Programmer from '../assets/programmer.png';
import ArrowBottom from '../assets/arrow-bottom.png'
import Nosotros from '../assets/nosotros.png'
import Mision from '../assets/mision.png'
import Vision from '../assets/vision.png'
import { useState } from 'react';

function CodePulse() {

    const [nosotros, setNosotros] = useState('Nosotros');
    const [mision, setMision] = useState('Misión');
    const [vision, setVision] = useState('Visión');

    return (
        <div>
            <div className="circle"></div>
            <h1 className='title'>CodePulse Platform</h1>
            <div>
                <h2 className='subtitle'>
                    "Potenciamos el <br /> talento tecnológico"
                </h2>
                <p className='element3'>Formación tecnológica y desarrollo de software profesional</p>
            </div>
            <section>
                <a href="/login">
                    <button className='element3 btn btn1'>Únete ahora</button>
                </a>
                <a href="/cursos">
                    <button className='element3 btn btn2'>Cursos</button>
                </a>
                <a href="/asesores">
                    <button className='element3 btn btn3'>Servicios</button>
                </a>
            </section>
            <div className='containerImage'>
                <img src={ Programmer } alt="programmer" className='programmerImage' />
            </div>
            <div className='arrow-bottom'>
                <img src={ ArrowBottom } alt="arrow-bottom" className='arrow-bottom' />
            </div>

            <article id='article-information'>
                <div className="nosotros">
                    <h1 className="title-target1">{ nosotros }</h1>
                    <p className='description'>
                        Somos una comunidad que <br />
                        impulsa el crecimiento de <br />
                        talento tecnológico mediante <br />
                        formación y colaboración, <br /> 
                        combinando lo mejor de un <br />
                        bootcampo y una universidad.
                    </p>
                    <img src={ Nosotros } alt="nosotros" className='iconTarget' />
                </div>
                <div className="mision">
                <h1 className="title-target2">{ mision }</h1>
                    <p className='description2'>
                        Brindar formación tecnológica <br />
                        accesible y de alta calidad, <br />
                        potenciando habilidades <br />
                        prácticas y colaborativas <br /> 
                        para el éxito profesional. <br /><br />
                    </p>
                    <img src={ Mision } alt="misión" className='iconTarget' />
                </div>
                <div className="vision">
                <h1 className="title-target3">{ vision }</h1>
                    <p className='description3'>
                        Ser la plataforma líden en <br />
                        formación tecnológica, <br />
                        impulsando innovación y <br />
                        desarrollo en la comunidad <br /> 
                        global de programadores.<br /><br />
                    </p>
                    <img src={ Vision } alt="misión" className='iconTarget' />
                </div>
            </article>
        </div>
    )
}

export default CodePulse;