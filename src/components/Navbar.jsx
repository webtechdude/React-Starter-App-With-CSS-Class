import navLogo from "../navLogo.png"
import '../index.css'
import { Link } from "react-router-dom"
import sun from "../pics/sun.png"
import moon from "../pics/moon.png"



const Navbar = ({handleClick, isDarkModeEnabled}) => {
    return (
        <nav className={`navbar ${isDarkModeEnabled ? "navbar-dark" : ""} navbar-expand-lg`}>
            <div className="container-fluid">
                <a className="navbar-brand" href=".">
                    <img src={navLogo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Web Tech DUDE
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/container">Container</Link>
                        </li>
                    </ul>
                    <button className={`btn btn-outline-${isDarkModeEnabled ? "light" : "dark"}`} onClick={handleClick}><img style={{height: "50px", width: "50px"}} src={isDarkModeEnabled ? sun : moon} alt={isDarkModeEnabled ? "Enable Light" : "Enable Dark"} /></button>
                </div>
            </div>
        </nav >
    )
}


export default Navbar