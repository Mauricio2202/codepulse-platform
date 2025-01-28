import './App.css'
import { Routes, Route } from 'react-router-dom'
import  Layout  from './pages/Layout'
import  CodePulse from './pages/Codepulse';
import  Nosotros from './pages/Nosotros';
import  Asesores from './pages/Asesores';
import  Premium from './pages/Premium';
import  Cursos from './pages/Cursos';
import  Hackaton from './pages/Hackaton';
import  Blog from './pages/Blog';
import  Login from './pages/Login';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<CodePulse />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="asesores" element={<Asesores />} />
            <Route path="premium" element={<Premium />} />
            <Route path="cursos" element={<Cursos />} />
            <Route path="hackaton" element={<Hackaton />} />
            <Route path="blog" element={<Blog />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
