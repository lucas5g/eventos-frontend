import React, {useState, useEffect}  from "react";
import { Modal, Button } from 'react-bootstrap'
import api from '../api'

function StudentsModalForm(props) {
    //console.log(props)
    const [invitations, setInvitations] = useState([])
    useEffect(() =>{
      
        if(props.student.ra){
            loadInvitations(props.student.ra)
        }

    }, [props.student.ra])

    function handleClick(invitation_id, ra){
        let obj = {invitation_id, ra}
        console.log(obj)
        api.postInvitationsStudents(obj)
            .then((res) => {

                var { msg } = res.data
                
                if(msg ==='delete' || msg === 'insert'){
                    loadInvitations(ra)
                }else if(msg){
                    alert(msg)
                }else{
                    alert('Erro no servidor')
                }
                /** */
            })
    }
    function loadInvitations(ra){
        api.getInvitationsRa(ra)
            .then((res) => {
                setInvitations(res.data.invitations)
              
        }) 
    }
    return (
        <Modal
            {...props}
  
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.student.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.student.father} | {props.student.mother}</p>
                <div>
                    <ul className="list-group">
                    {
                        invitations.map( r => 
                            <li key={r.id} className="list-group-item" onClick={() => handleClick(r.id, props.student.ra)}>
                                <div className="float-right">{r.ra ? '\u{1F609} Convite Entregue': <i className="far fa-paper-plane float-right"></i>}</div>
                                <div>{r.name}</div>
                            </li>
                        )
                    }
                    </ul>
                
              
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StudentsModalForm