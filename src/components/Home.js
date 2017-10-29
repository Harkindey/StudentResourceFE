import React from 'react';
import '../App.css';
import 'bulma/css/bulma.css';
var  api = require('../utils/api');
var  _ = require('lodash');


function Student (props) {
  return (
    <div>
      { props.students.map(function(item,index){
        const key = props.students[index][Object.keys(item)[0]];
        return (
            <div className="column is-half" key={index}>
              <article className="media is-primary">
                    <div className="column is-9">
                      <h1>Registration Number:<span className="has-text-weight-bold">{key.registration_number}</span></h1>
                      <h1>Name:<span className="has-text-weight-bold">{key.name}</span></h1>
                      <h1>Current Part: <span className="has-text-weight-bold">{key.current_part}</span></h1>
                      <h1>Degree Programme:<span className="has-text-weight-bold">{key.degree_programme}</span></h1>
                      <h1>Department:<span className="has-text-weight-bold">{key.department}</span></h1>
                      <h1>Faculty:<span className="has-text-weight-bold">{key.faculty}</span></h1>
                      <h1>Hall Of Residence:<span className="has-text-weight-bold">{key.hall_of_residence}</span></h1>
                    </div>
                    <div className="column is-3">
                      <figure className="image is-128x128">
                          <img src="https://bulma.io/images/placeholders/128x128.png" alt="hey"/>
                      </figure>
                      <button className="button is-primary"/>
                    </div>
                      <div className="media-right">
                          <button className="delete"></button>
                      </div>
              </article> 
            </div>)
      })}
  </div>
  )
}

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      students : []
    }
  }

    async componentWillMount(){
      var res = await api.getStudents();
      var resArray = _.map(_.toPairs(res.data), d => _.fromPairs([d]));
      this.setState({ students: resArray });
      console.log(resArray);
    }
    render() {
      return (
        <div className="container">
          <div className="column center">
            <Student students={this.state.students} />
          </div>
        </div>  
      );
    }
}
export default Home;
