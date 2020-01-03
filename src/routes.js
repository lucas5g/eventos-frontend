import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

//import './App.css';
import Home from './Defaults/Home'
import StudentsList from './Students/StudentsList'
import Footer from './Defaults/Footer'

function Routes() {
  return (
    <Router>
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
                aria-haspopup="true" aria-expanded="false">Nome do Usuário</a>
              <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="#/">Sair</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      
      <Route exact={true} path='/' component = {Home}/>
      <Route path='/students' component = {StudentsList}/>
      
      <Footer />
    </Router>

  )
}

export default App;
