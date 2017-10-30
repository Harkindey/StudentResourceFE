var axios = require('axios');

const BASE_URL = 'http://localhost:3333';

module.exports = {
    getStudents: () => {
        return axios.get(BASE_URL)
            .then((res) => {
                return res
            }).catch((err) => {
                console.log(err)
            });
    },
    createStudent: (json) => {  
        const dt = JSON.stringify(json)
        console.log(dt);
      return axios.post(BASE_URL+`/create`, dt)
        .then((res) => {
          return res;
        });
    },
    updateStudents:(id, json) => {
        const dt = JSON.stringify(json)
        return axios.put(BASE_URL+`/update/${id}`, dt)
        .then((res) => {
            return res
        })
    },
    deleteStudent: (id) => {
        return axios.delete(BASE_URL+`/delete/${id}`)
        .then((res) =>{
            return res;
        })
    }
  }