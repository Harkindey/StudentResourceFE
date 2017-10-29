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
    createStudent: () => {  
      return axios.post(BASE_URL+`/create`)
        .then((res) => {
          return res;
        });
    },
    updatestudents:(id) => {
        return axios.put(BASE_URL+`/update/${id}`)
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