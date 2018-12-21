import React, {Component} from 'react';
import './App.css';
import {withRouter} from 'react-router-dom'


class Main extends Component {
    constructor() {
        super()
        this.state = {
            one: null,
            two: null,
            three: null,
            four: null
        }
        this.onchange = this.onchange.bind(this);
        this.save = this.save.bind(this);
    }

    componentWillMount() {
        if (this.props.object) {
            this.setState(this.props.object)
        }
    }

    onchange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    save() {
        console.log(this.state)
    }


    render() {
        return (
            <div className="App">
                <form>
                    <input name={"one"} type={"text"} value={this.state.one} onChange={this.onchange}/> <br/>
                    <input name={"two"} type={"text"} value={this.state.two} onChange={this.onchange}/> <br/>
                    <input name={"three"} type={"text"} value={this.state.three} onChange={this.onchange}/> <br/>
                    <input name={"four"} type={"text"} value={this.state.four} onChange={this.onchange}/> <br/>
                    <input type={"button"} value="Save" onClick={this.save}/>
                    <input type={"button"} value="Rehook" onClick={()=>this.props.rehook(this.state)}/>
                </form>
            </div>
        );
    }
}

export default withRouter(Main)
