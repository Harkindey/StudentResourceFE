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
      return axios.post(BASE_URL+`/create`, json)
        .then((res) => {
          return res;
        });
    },
    updateStudents:(id, json) => {
        return axios.put(BASE_URL+`/update/${id}`, json)
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