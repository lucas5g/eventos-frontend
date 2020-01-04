import React from 'react'
import './Home.css'

const Home = (props) => {
    return(
        <div className="container-fluid home pt-custom">
            <div className="row mb-3 ml-2 border-bottom">
                <div className="col-md-12">
                    <h2>Home</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 ">
                    <h3 className="text-img-conteudo">Aplicação para ajudar nas organizações dos eventos do colégio</h3>
                </div>
            </div>
        </div>
    )

}

export default Home