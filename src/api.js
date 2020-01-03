import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:3333`
        //baseURL: `http://csa.api.com/eventos/api/index.php`
        //baseURL: `http://csa.eventos.com/api/index.php`
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