import React from 'react';
import Main from './main'


    class child extends React.Component {
        constructor() {
            super();
            this.state = {
                child: {}
            }
        }

        componentWillMount() {
            let child = localStorage.getItem('child');
            this.setState({child: JSON.parse(child)})
        }

        render() {
            return (
                <Main
                    object={this.state.child}
                    secretToLife={42}
                />
            );
        }
    }



export default child;
