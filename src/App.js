import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css';

//import api from './api'
import Home from './Defaults/Home'
import StudentsList from './Students/StudentsList'
import Login from './Defaults/Login'
import NavBar from './Defaults/NavBar';
import Footer from './Defaults/Footer'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logged: false,
      name: '',

    }

  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.setState({ logged: true })
    }

  }

  render() {
    return (
      <>
        {this.state.logged ?
          <Router >
            <>
              <NavBar />
              <Route exact={true} path='/' component={StudentsList} />
              <Route path='/home' component={Home} />
              <Route path='/students' component={StudentsList} />

              <Redirect from='*' to='/' />

              <Footer />
            </>
          </Router>
          :
          <Router>
            <Route path='/' component={Login} />
            <Redirect from='*' to='/' />

          </Router>
        }
      </>
    )
  }

}
export default App
