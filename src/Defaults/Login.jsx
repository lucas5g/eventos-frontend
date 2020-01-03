import React, {Component} from 'react'
import api from '../api'
import './Login.css'


class Login extends Component{
    constructor(props){
        super(props)
        this.state = ({
            user:'lucas.assuncao',
            password:'Sic7c8sic',
            alert: null
        })

        this.handleLogin = this.handleLogin.bind(this)

    }

    async handleLogin(e){
        e.preventDefault()
        let obj = {
            username:this.state.user,
            password: this.state.password
        }

        try{
            let { data } = await api.postAuthenticate(obj)
            console.log(data)
            this.setState({alert: false})
            localStorage.setItem('token', data.token)
            localStorage.setItem('name', data.name)
            window.location.reload()
        }catch (e){
            this.setState({alert:'Usuário ou Senha Inválido'})
        }
        

        //localStorage.setItem('token', data.token)
        
    }

    render(){
        return (
            <div className="container-fluid login">
                <div className="row justify-content-center align-middle">
                    
                    <div className="col-md-5 col-sm-10">
                        <div className="card">
        
                            <h5 className="card-header purple-gradient white-text text-center py-4">
                                <strong>Login</strong>
                            </h5>
                            {this.state.alert &&
                            <div className="alert alert-warning ml-2 mt-2 mr-2 " role="alert">
                                {this.state.alert}
                            </div>
                            }
                            <div className="card-body px-lg-5">
                                <form className="text-center" onSubmit={this.handleLogin} >
                                    <input type="text" className="form-control mb-4" placeholder="Usuário" value={this.state.user}
                                        onChange={e =>this.setState({user:e.target.value})}/>
        
                                    <input type="password" className="form-control mb-4" placeholder="Password" value={this.state.password}
                                        onChange={e => this.setState({password: e.target.value})}/>
                                    
                                    <button className="btn btn-outline-purple btn-block z-depth-0 my-4 waves-effect rounded" type="submit">Entrar</button>
        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        )   

    }
  

}



export default Login