import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">CodePulse</Link>
                </li>
                <li>
                    <Link to="/nosotros">Nosotros</Link>
                </li>
                <li>
                    <Link to="/asesores">Asesores</Link>
                </li>
                <li>
                    <Link to="/premium">Premium</Link>
                </li>
                <li>
                    <Link to="/cursos">Cursos</Link>
                </li>
                <li>
                    <Link to="/hackaton">Hackaton</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/login">Iniciar Sesión</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
}

export default Layout;