import  React, {Component} from 'react';

class  Hero extends Component {

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
                    <button class="button" >
                    <span>Create Student</span>
                    </button>
                </section>
            </div>
        )
    }
}

export default Hero;
