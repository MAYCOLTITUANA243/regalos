import './App.css'
import { Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Catalogo from './pages/productoSalida';
import Home from './pages/home';
import Logo from './img/logo.gif';
function App(){
  return(
    <div className="App" class="bg-light">
      <div id='conte' style={{
      display: 'flex',
      justifyContent: 'center',
      width:'100%',
      height:'300px'
      }}>
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