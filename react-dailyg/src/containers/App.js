import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



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
                                  let person = [...this.state.persons];
                                  person.splice(index,1);
                                  this.setState({
                                    persons: person
                                  });
                                }

    inputChangeHandler =(event,id) =>{
                                      let personIndex = this.state.persons.findIndex(p => {return p.id  === id})
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
                              person= (<div><Persons pers={this.state.persons} 
                              clicked={this.removePersonHandler} 
                              changed={this.inputChangeHandler}>
                              </Persons></div>)
      }

      return (
              <div className={classes.App}>
              <Cockpit persons={this.state.persons} 
              show={this.state.showpersons} 
              clicked={this.toggleDivHandler}></Cockpit>
               {person}

               </div>
      );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work'));
  }
}

export default App;
