import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    
    useEffect(() => {

        //** */
    }, [])

    function logout() {
        console.log('logout')
        localStorage.clear()
        window.location.reload()
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark purple-gradient fixed-top">
            <a className="navbar-brand font-weight-bold" href="/">Eventos</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item  mr-3">
                        <Link className="nav-link " to="/">Home</Link>
                    </li>
                    <li className="nav-item mr-3">
                        <Link className="nav-link" to="/students">Alunos</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">{localStorage.getItem('name')}</a>
                        <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="#/" onClick={()=>logout()}>Sair</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default NavBar;
