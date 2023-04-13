import './App.css'
import { Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Catalogo from './pages/productoSalida';
import Home from './pages/home';
import Logo from './img/logo.gif';
function App(){
  return(
    <div className="App" class="bg-light">
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      background:'#22252C'
      }}>
        <img src={Logo} alt="Descripción de la imagen" 
        style={{
          alignContent:'center',
          width: '150%',
          height: '300px',
          filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
        }}/>
      </div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
        </Route>
      </Routes>
    </div>
  )
}
export default App;