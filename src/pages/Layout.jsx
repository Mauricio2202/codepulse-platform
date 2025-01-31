import { Link, Outlet } from "react-router-dom";
import Menu from '../assets/menu.png';
import '../App.css';

const Layout = () => {

    return (
        <div>
            <nav className="navList">
                <ul className="listUnorder">

                    <li className="listItem">
                        <Link to="/" className="item">CodePulse</Link>
                    </li>
                    <li className="listItem">
                        <Link to="/nosotros" className="item">Nosotros</Link>
                    </li>
                    <li className="listItem">
                        <Link to="/asesores" className="item">Asesores</Link>
                    </li>
                    <li className="listItem">
                        <Link to="/premium" className="item">Premium</Link>
                    </li>
                    <li className="listItem">
                        <Link to="/cursos" className="item">Cursos</Link>
                    </li>
                    <li className="listItem">
                        <Link to="/hackaton" className="item">Hackaton</Link>
                    </li>
                    <li className="listItem">
                        <Link to="/blog" className="item">Blog</Link>
                    </li>
                    <li className="listItem loginItem">
                        <Link to="/login" className="item">Iniciar Sesión</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
