import React from 'react'
import api from '../api'


const  StudentsModalForm = (props) => {

    //const [student, setStudent] = useState(props.student)
    //const [invitations, setInvitations] = useState([props.invitations])
    //console.log(invitations)
    const student = {
        name: props.student.name,
        father: props.student.father,
        mother: props.student.mother,
        ra: props.student.ra

    }
    const invitations = props.invitations
      



    function handleClick(ra, idInvitation){
        let obj  = {
            ra, idInvitation
        }
       // obj = JSON.stringify(obj);
        //obj = ra=
        api.postInvitationsStudents(obj)
            .then((res) => {
                //console.log(res)
                console.log(res.data)
            })

    }

    return(

        <div className="modal fade" id="basicExampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true" data-keyboard="false" data-backdrop ='static'>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{student.name} | {student.ra}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                 
                    <div className="modal-body">
                        <div>
                            {student.father ? 'Pai: ' + student.father : ''} 
                        </div>
                        <div>
                            {student.mother ? 'Mãe: ' + student.mother : ''} 
                        </div>
                        <ul className="list-group mt-3">
                            {invitations && invitations.map( r =>
                                <li onClick={() => handleClick(student.ra, r.id)} title="Clique Para enviar o Convite" className="list-group-item" key={r.id}>
                                    {r.name}
                                    
                                    <i className="far fa-paper-plane float-right"></i>
                                </li>
                            )}
                        </ul>
                        <form className="mt-5">
                            <label htmlFor="obs">Observações </label>
                            <textarea name="obs" id="obs" className="form-control"></textarea>
                        </form>               
                    </div> 
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCELAR</button>
                        <button type="button" className="btn btn-primary">SALVAR</button>
                            
                    </div>
                </div>
            </div>
        </div>
        
    )
    /** */
}

export default StudentsModalForm