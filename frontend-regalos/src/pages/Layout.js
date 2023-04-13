import { Outlet, Link } from 'react-router-dom';
const Layout = () =>{
    return <div className="App" class="bg-light">
        <nav>
            <ul>
                <li>
                    <Link to="/home"><h3><strong>Home</strong></h3></Link>
                </li>
                <li>
                    <Link to="/catalogo"><h3><strong>Catálogo</strong></h3></Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
}
export default Layout;