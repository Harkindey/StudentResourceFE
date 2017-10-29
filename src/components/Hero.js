import  React, {Component} from 'react';
import Form from './Form';

class  Hero extends Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
      }

      toggleModal = () => {
          console.log(this.state.isOpen)
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render () {

        return(
            <div>
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
                    <button className="button" onClick={this.toggleModal}>
                    <span>Create Student</span>
                    </button>

                        
                </section>
                <Form show={this.state.isOpen} onClose={this.toggleModal} />
            </div>
        )
    }
}

export default Hero;
