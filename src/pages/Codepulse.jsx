import Programmer from '../assets/programmer.png';
import ArrowBottom from '../assets/arrow-bottom.png'

function CodePulse() {
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
        </div>
    )
}

export default CodePulse;