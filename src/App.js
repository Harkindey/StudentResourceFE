import React,{ Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import  api from './utils/api' ;
import  _ from 'lodash';
import Hero from './components/Hero'


class Student extends Component{
    constructor(props){
      super(props);
      this.state ={

      }
    }
    componentWillMount(){
      console.log(this.props);
    }

    

  render(){
    const students = this.props.students
    const handleDelete = (id,key,index) =>{
        const alert = window.confirm(`Are you sure you want to delete ${key.name}`);
        if (alert){
          api.deleteStudent(id);
          students.splice(index,1);
          this.forceUpdate();
        }
    }


    
    return (
      <div>
        { this.props.students.map(function(item,index){
          const id = Object.keys(item)[0];
          const key = students[index][Object.keys(item)[0]];
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
                        <figure className="image is-128x128 column">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt="hey"/>
                        </figure>
                        <div className="column">
                        <button className="button is-primary">Edit</button>
                        </div>
                      </div>
                        <div className="media-right">
                            <button className="delete" onClick={handleDelete.bind(null,id,key,index)}></button>
                        </div>
                </article> 
              </div>)
        })}
    </div>
    )
  }
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
           <Hero />
          <div className="column center">
            {(this.state.students.length === 0)
            ? null:
            <Student students={this.state.students} />
            }
          </div>
        </div>  
      );
    }
}
export default App;
