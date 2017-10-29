import React, {Component} from 'react'
import Nav from './Nav'

class Hero extends Component {
    render(){
        return(
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
                <Nav />
        </section>
        )
    }
}
export default Hero;
