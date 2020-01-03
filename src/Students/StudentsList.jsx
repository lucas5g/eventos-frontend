import React, {Component} from 'react'
import api from '../api'

import Modal from './StudentsModalForm'
import Nav from '../Defaults/NavBar'
import Footer from '../Defaults/Footer'

class StudentsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            students:[],
            studentModal:'',
            search: '', 
            modalShow: false,
          
        }

        this.handleSearch = this.handleSearch.bind(this)
        this.loadStudents = this.loadStudents.bind(this)
      
    }
    
    componentDidMount(){
        //console.log('montou')
        this.loadStudents()
      
    }

    hideModel(){
        this.setState({modalShow:false})
        this.loadStudents(this.state.search)

    }

    loadStudents(search){
        if(search){
            api.loadStudentsSearch(search)
                .then((res) => {
                    this.setState({students: res.data.students})
                })
            
            return;
        }
        api.loadStudents()
            .then((res) => {
                
                this.setState({students:res.data.students})
            })
    }


    handleSearch(e){

        this.setState({search:e.target.value})
        this.loadStudents(this.state.search)
    }
    
    handleClick(ra){
               
        api.loadStudentsRa(ra)
            .then((res) => {
                this.setState({
                    studentModal: res.data.student,
                    modalShow: true
                })
                //console.log(res.data.student)
            })

    }
    /** */
    render(){
        return(
            <>
                <Nav />
                <div className="container-fluid pt-custom">
                
                    <div className="row mb-3 ml-2 border-bottom">
                        <div className="col-12">
                            <h2>Alunos e País</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <input name="search" className="form-control form-control-lg mb-2" type="search" placeholder="Nome do Aluno, Pai ou Mãe" onChange={this.handleSearch} />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <ul className="list-group">
                                {this.state.students.map( r => 
                                    <li key={r.ra} onClick={() => this.handleClick(r.ra)}className="list-group-item" >
                                        <div className="float-right">{r.invitation && r.invitation+' | \u{1F609} Tenho Convite'}</div>
                                        <div>{r.name}</div>
                                        <div><sub>{r.father} | {r.mother}</sub></div>
                                    </li>
                                )}
                                {this.state.students.length === 0 &&  
                                    <li className="list-group-item">Não Encontrado</li>
                                }

                            </ul>
                        </div>
                    </div>
                                    
                    <Modal 
                        student ={this.state.studentModal}
                        show = {this.state.modalShow}
                        //onHide = {() => this.setState({modalShow:false})}
                        onHide = {() => this.hideModel()}

                        />
                    
                </div>
                <Footer />
            </>

        )
    }
}

export default StudentsList
