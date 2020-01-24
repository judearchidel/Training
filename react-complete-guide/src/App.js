import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      {
        name: 'max', 
        age : 28
      },
      {
        name: 'jude',
        age: 67
      },
      {
        name: 'jovi',
        age: 27
      }
    ],
    showpersons: false
  }

  removePersonHandler =(index)=>{
    console.log("clicked");
    let person = this.state.persons;
    person.splice(index,1);
    this.setState({
      persons: person
    });
  }

    inputChangeHandler =(event) =>{
      this.setState({
        persons: [{
          name: 'max', 
          age : 28
        },
        {
          name: event.target.value,
          age: 67
        },
        {
          name: "jovitta",
          age: 29
        }]
      })
    }

    toggleDivHandler =()=>{
      let chagevar= this.state.showpersons;
      this.setState({
        showpersons: !chagevar
      });
    }
  
    render() {
      const style ={
        backgroundcolor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };
      let person = null;
      if(this.state.showpersons){
        person= (<div>{this.state.persons.map((per,index)=>{
          return  <Person
          click={this.removePersonHandler.bind(this,index)}
          name={per.name} 
          age ={per.age}
          change={this.inputChangeHandler}>My hobbies: footballl</Person>
        })
      }
        </div>
        
        )
         
      }

      return (
        <div className="App">
        <h1>Hi, React App</h1>
        <button style={style} 
        onClick={this.toggleDivHandler.bind(this,"jovitta")}>Switch names</button>
       {person}

       </div>
      );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work'));
  }
}

export default App;
