import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            {name: "John Doe", age: "30"},
            {name: "Jane Doe", age: "25"},
            {name: "Baby Doe", age: "1"}

        ]
    }

    switchAgeHandler = () => {
        console.log('button works!!');
       this.setState ({
            persons: [
                {name: "John Doe", age: "30"},
                {name: "Jane Doe", age: "28"},
                {name: "Baby Doe", age: "5"}

            ]
        })
    };

    render() {
        return (
            <div className="App">
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}><p> Hobbies: Coding </p> <br/>
                </Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}><p>Hobby: Coocking </p> <br/>
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <br/>
                <br/>
                <button onClick={this.switchAgeHandler}> Switch Age </button>
            </div>
        );
    }
}

export default App;
