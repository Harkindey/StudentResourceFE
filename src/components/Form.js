import React,{Component} from 'react';
import api from '../utils/api'

class Form extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

    componentWillMount() {
        console.log(this.props)
        if (this.props.data){
            this.setState(this.props.data)
        } else {
            this.setState({
                name: "",
                registration_number: "",
                current_part: "",
                degree_programme: "",
                department: "",
                faculty: "",
                hall_of_residence: ""
            });
        }
    }

      handleSubmit(event){
        event.preventDefault();
        console.log(this);
        api.createStudent(this.state).then(() => {
                alert(`${this.state.name} is added`);
                this.state = {}
        }).catch((err) => {
            console.log(err)
        });
    }

    render() {
        if(!this.props.show) {
            return null;
          }

        return (
            <div className="modal is-active">
                <div className="modal-background" onClick={this.props.onClose}></div>
                    <div className="modal-content">
                    <div className="modal-card-body">
                    <form  onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input 
                                id="name"
                                className="input" 
                                type="text" 
                                placeholder="Joe Dohn"
                                onChange={( event )=> {this.setState({ name : event.target.value })}}
                                value={this.state.name} 
                                required
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Current Part</label>
                            <div className="control">
                                <input 
                                id="current_part"
                                className="input" 
                                type="text" 
                                placeholder="E.G 1,2,3,..." 
                                onChange={( event )=> {this.setState({ current_part : event.target.value })}}
                                value={this.state.current_part}
                                required
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Registration Number</label>
                            <div className="control">
                                <input 
                                id="registration_number"
                                className="input" 
                                type="text" 
                                placeholder="BCH/1992/041"
                                onChange={( event )=> {this.setState({ registration_number : event.target.value })}}
                                value={this.state.registration_number} 
                                required
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Faculty</label>
                            <div className="control">
                                <input 
                                id="faculty"
                                className="input" 
                                type="text" 
                                placeholder="Technology" 
                                onChange={( event )=> {this.setState({ faculty : event.target.value })}}
                                value={this.state.faculty}
                                required
                                />
                            </div>
                        </div>

                        <div className="field">
                        <label className="label">Department</label>
                        <div className="control">
                            <input 
                            id="department"
                            className="input" 
                            type="text" 
                            placeholder="Yoruba Engineering" 
                            onChange={( event )=> {this.setState({ department : event.target.value })}}
                            value={this.state.department} 
                            required
                            />
                        </div>
                        </div>

                        <div className="field is-grouped">
                            <div>
                                <label className="label">Degree Program</label>
                                <div className="control">
                                    <div className="select">
                                    <select onChange={( event )=> {this.setState({ degree_programme : event.target.value })}}
                                            value={this.state.degree_programme}
                                            id="degree_programme"
                                            required>
                                        <option>Select dropdown</option>
                                        <option>B.sc</option>
                                        <option>M.sc</option>
                                        <option>Ph.d</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                                
                            <div>
                                <label className="label">Hall Of Residence</label>
                                <div className="control">
                                    <div className="select">
                                    <select  onChange={( event )=> {this.setState({ hall_of_residence : event.target.value })}}
                                            value={this.state.hall_of_residence}
                                            id="hall_of_residence"
                                            required>
                                        <option>Select dropdown</option>
                                        <option>ETF Hall</option>
                                        <option>Awolowo Hall</option>
                                        <option>Angola Hall</option>
                                        <option>Fajuyi Hall</option>
                                    </select>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" type="submit">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-text" onClick={this.props.onClose}>Cancel</button>
                        </div>
                        </div>
                        </form>   
                    </div>                    
                    </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.props.onClose}></button>
          </div>
        )
    }
}

export default Form;