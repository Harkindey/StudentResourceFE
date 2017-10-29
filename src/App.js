import React, { Component } from 'react';
import api from './utils/api'
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import _ from 'lodash';

function Student (props){
  return (
    <div>
      { props.students.map(function(item,index){
        console.log(props.students[index][Object.keys(item)[0]]);
        return(
            <div className="column is-half" key={index}>
              <article className="media is-primary">
                    <div className="column is-9">
                      <h1>Registration Number:<span className="has-text-weight-bold">{props.students[index][Object.keys(item)[0]].registration_number}</span></h1>
                      <h1>Name:<span className="has-text-weight-bold">{props.students[index][Object.keys(item)[0]].name}</span></h1>
                      <h1>Current Part: <span className="has-text-weight-bold">{props.students[index][Object.keys(item)[0]].current_part}</span></h1>
                      <h1>Degree Programme:<span className="has-text-weight-bold">{props.students[index][Object.keys(item)[0]].degree_programme}</span></h1>
                      <h1>Department:<span className="has-text-weight-bold">{props.students[index][Object.keys(item)[0]].department}</span></h1>
                      <h1>Faculty:<span className="has-text-weight-bold">{props.students[index][Object.keys(item)[0]].faculty}</span></h1>
                      <h1>Hall Of Residence:<span className="has-text-weight-bold">{props.students[index][Object.keys(item)[0]].hall_of_residence}</span></h1>
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

class App extends Component {
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
        <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              University Students
            </h1>
            <h2 className="subtitle">
              Data
            </h2>
          </div>
        </div>
      </section>
      <div className="column center">
        <Student students={this.state.students} />
      </div>
    </div>  
    );
  }
}

export default App;
