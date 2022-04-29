import React, { Component } from 'react';

class Alltracks extends Component {
    constructor(props) {
        console.log('1. Constructor sets props and intial state for component');
        super(props);
        this.state = {
            x: 0,
        }
    }

    componentDidMount() {
       console.log('3. Component mounted successfully!!');
       this.setState((previousState) => {
           return { x: previousState.x++ }
       });
       console.log('4. SetState updates state variables.');
    }

    shouldComponentUpdate() {
        console.log('5. Should component update ?? ');
        return true;
    }

    componentDidUpdate() {
        console.log('6. Component updates done!');
    }

    render() {
        console.log('2. Render the JSX returned by component');
        const { x } = this.state;
        const { age } = this.props;
        return <div>
            <p>Alltracks Component</p>
            <p>Value of x {x} and age {age}.</p>
        </div>
    }
}

export default Alltracks;

