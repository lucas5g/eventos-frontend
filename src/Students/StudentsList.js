import React, { useState, useEffect } from 'react'
//import { Modal, Button } from 'react-bootstrap'

import api from '../services/api'

import Modal from './StudentsForm'

const StudentsList = () => {

  const [filter, setFilter] = useState('')
  const [students, setStudents] = useState([])
  const [studentModal, setStudentModal] = useState('')
  const [show, setShow] = useState(false)
  //const [invitations, setInvitations] = useState([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    document.title = 'Alunos e País'
    getStudents()

    //setStudents
  }, [])

  function handleFilter(e) {

    setFilter(e.target.value)
    getStudents(filter)
  }

  async function getStudents(filter) {
    if (filter) {
      let { data } = await api.get(`/students/search/${filter}`)
      setStudents(data)
      return;
    }
    let { data } = await api.get(`/students`)
    setStudents(data)
  }
  /** */
  async function handleClick(ra) {

    let { data } = await api.get(`/students/${ra}`)
    setStudentModal(data[0])
    //setStudentModal(ra)
    handleShow()
    //console.log(data)
    /** */


  }

  return (
    <div className="container-fluid pt-custom">
      <div className="row mb-3 ml-2 border-bottom">
        <div className="col-12">
          <h2>Alunos e País</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <input className="form-control form-control-lg mb-2" placeholder="Nome do Aluno, Pai ou Mãe" onChange={handleFilter} onKeyUp={handleFilter} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <ul className="list-group">
            {students.map(r =>
              <li key={r.ra} onClick={() => handleClick(r.ra)} className="list-group-item" >
                <div className="float-right">{r.invitation && r.invitation + ' | \u{1F609} Tenho Convite'}</div>
                <div>{r.name}</div>
                <div><sub>{r.father} | {r.mother}</sub></div>
              </li>
            )}
            {students.length === 0 && filter.length > 0 &&
              <li className="list-group-item">Não Encontrado</li>
            }

          </ul>
        </div>
      </div>
      <Modal student={studentModal} show={show} onHide={handleClose} />

    </div>
  )

}

export default StudentsList
