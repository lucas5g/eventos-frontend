import axios from 'axios'

const baseUrl = () => {
    const hostname = window.location.hostname
    if(hostname === 'localhost'){
        return 'http://localhost:3333'
    }
    return 'http://api.eventos.detec.site:3333'

}

const api = axios.create({
    baseURL: baseUrl()
}) 



const apis =  {
    //apis students
    getStudents: () => api.get('/students'),
    getStudentsRa:(ra) => api.get(`/students/${ra}`),
    getStudentsSearch: (search) => api.get(`/students/search/${search}`),
    //invitations
    getInvitationsRa: (ra) => api.get(`/invitationsStudents/ra/${ra}`),

    //invitationsStudents
    postInvitationsStudents:(obj) => api.post(`/invitationsStudents/post/`,obj),

    //user
    postAuthenticate:(obj) => api.post(`/authenticate/`, obj),
    getTest:() => api.get('/authenticate'),
    getUserStatus:() => api.get(`/users/status`)
       

}

export default apis