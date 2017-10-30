import React,{ Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import  api from './utils/api' ;
import  _ from 'lodash';
import Hero from './components/Hero';
import Loading from './components/Loading';
import Form from './components/Form';


class Student extends Component{
    constructor(props){
      super(props);
      this.state = {
        isOpen: false,
        key: '',
        id: ''
      }
      this.handleEdit = this.handleEdit.bind(this);
    }


   handleEdit (key, index, id) {
        if (index === undefined) {
            this.setState({ isOpen: !this.state.isOpen, key:'' , id : ''});
            this.forceUpdate()
        }else{
            this.setState({ isOpen: !this.state.isOpen, key: key, id : id })
        }
    }

  render(){
    const students = this.props.students
    const isOpen = this.state.isOpen;
    const handleEdit = this.handleEdit;
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
        { this.props.students.map((item,index) => {
          const id = Object.keys(item)[0];
          const key = students[index][Object.keys(item)[0]];
          return (
              <div className="column is-half" key={index}>
                <article className="media is-primary">
                      <div className="column is-9">
                        <h1>Registration Number:<span className="has-text-weight-bold">{key.registration_number}</span></h1>
                        <h1>Name:<span className="has-text-weight-bold">{key.name}</span></h1>
                        <h1>Current Part: <span className="has-text-weight-bold">Part {key.current_part}</span></h1>
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
                        <button className="button is-primary" onClick={handleEdit.bind(null,key,index,id)}>Edit</button>
                        </div>
                      </div>
                        <div className="media-right">
                            <button className="delete" onClick={handleDelete.bind(null,id,key,index)}></button>
                        </div>
                        
                </article> 
              </div>)
        })}
        {(this.state.key !== '') ? 
        <Form show={isOpen} onClose={handleEdit} data={this.state.key} id={this.state.id}/> : 
        null}
    </div>
    
    )
  }
  
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      students : [],
      isOpen: false 
    }
  }

  toggleModal = () => {
    console.log(this.state.isOpen)
  this.setState({
    isOpen: !this.state.isOpen
  });
  }

    componentWillMount(){
      api.getStudents().then((res) => {
        var resArray = _.map(_.toPairs(res.data), d => _.fromPairs([d]));
        this.setState({ students: resArray });
        console.log(resArray);
      }).catch((err) => {
        console.log(err);
      });
    }

    render() {
      return (
        <div className="container">
           <Hero />
           <div className="column" onClick={this.toggleModal}>
            <button className="button">
                      <span>Create Student</span>
              </button>
            </div>
          <div className="column center">
            {(this.state.students.length === 0)
            ? <Loading /> :
            <Student students={this.state.students} show={this.state.isOpen}/>
            }
          </div>
          <Form show={this.state.isOpen} onClose={this.toggleModal} />
        </div>  
      );
    }
}
export default App;
