import React, { useState } from 'react'
import api from '../api'
import './Login.css'


const Login = () => {

    const [username, setUser ] = useState('lucas.assuncao')
    const [password, setPassword ] = useState('Sic7c8sic')
    const [alert, setAlert ] = useState(false)

    async function  handleLogin(e){
        e.preventDefault()
        
        let obj = { username, password }
     
        try{
            let { data } = await api.postAuthenticate(obj)
           
            setAlert(false)
            localStorage.setItem('token', data.token)
            localStorage.setItem('name', data.name)
            window.location.reload()
        }catch (e){
     
            if(e.response)

            /*
            let { message } = e.response.data[0]
            
            console.log(message)
            if(message === 'Cannot find user with provided username'){
                return setAlert('Usuário não Cadastrado')
            }

            if(message === 'Invalid user password'){
                return setAlert('Senha Inválida')
            }
            /**/
           
            return  setAlert('Usuário ou Senha Inválido')
        }
        
    }

   
    return (
        <div className="container-fluid login">
            <div className="row justify-content-center align-middle">
                
                <div className="col-md-5 col-sm-10">
                    <div className="card">
    
                        <h5 className="card-header purple-gradient white-text text-center py-4">
                            <strong>Login</strong>
                        </h5>
                        {alert &&
                        <div className="alert alert-warning ml-2 mt-2 mr-2 " role="alert">
                            {alert}
                        </div>
                        }
                        <div className="card-body px-lg-5">
                            <form className="text-center" onSubmit={ handleLogin } >
                                <input type="text" className="form-control mb-4" placeholder="Usuário" value={ username }
                                    onChange={e => setUser(e.target.value)}/>
    
                                <input type="password" className="form-control mb-4" placeholder="Password" value={ password }
                                    onChange={e => setPassword( e.target.value)}/>
                                
                                <button className="btn btn-outline-purple btn-block z-depth-0 my-4 waves-effect rounded" type="submit">Entrar</button>
    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )   

}



export default Login