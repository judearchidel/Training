import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';



class App extends Component {
  state ={
    persons: [
      {
        id: "12ad",
        name: 'max', 
        age : 28
      },
      {
        id: "1asd",
        name: 'jude',
        age: 67
      },
      {
        id: "123ae",
        name: 'jovi',
        age: 27
      }
    ],
    showpersons: false
  }

  removePersonHandler =(index)=>{
    console.log("clicked");
    let person = [...this.state.persons];
    person.splice(index,1);
    this.setState({
      persons: person
    });
  }

    inputChangeHandler =(event,id) =>{

      let personIndex = this.state.persons.findIndex(p => {return p.id  === id})
      console.log(personIndex);
      let per ={...this.state.persons[personIndex]};
      per.name= event.target.value;
      const person = [...this.state.persons];
      person[personIndex]=per;
      this.setState({
        persons: person
      });
    }

    toggleDivHandler =()=>{
      let chagevar= this.state.showpersons;
      this.setState({
        showpersons: !chagevar
      });
    }
  
    render() {
      
      let person = null;
      if(this.state.showpersons){
        person= (<div>{this.state.persons.map((per,index)=>{
          return  <Person
          click={this.removePersonHandler.bind(this,index)}
          name={per.name} 
          age ={per.age}
          change={(event)=>this.inputChangeHandler(event,per.id)}
          key={per.id}
          >My hobbies: footballl</Person>
        })
      }
        </div>
        
        )
        // style.backgroundColor = 'red';
        // style[':hover'] ={
          // backgroundColor: 'salmon',
         //  color: 'blue'
         //}
      }

      let classes =[]
      if(this.state.persons.length <=2){
        classes.push('red');
      }
      if(this.state.persons.length <2){
        classes.push('bold');
      }

      return (
        <div className="App">
        <h1>Hi, React App</h1>
        <p className={classes.join(" ")}>The conditional styling</p>
        <button
        onClick={this.toggleDivHandler.bind(this,"jovitta")}>Switch names</button>
       {person}

       </div>
      );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work'));
  }
}

export default App;
