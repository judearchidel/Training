import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';




class App extends Component {
  constructor(props){
    super(props);
  
  console.log("App.js constructor");
  }
  state ={
          persons: [
            {id: "12ad", name: 'max',age : 28},
            {id: "1asd",name: 'jude', age: 67},
            {id: "123ae", name: 'jovi',age: 27}
                  ],
          showpersons: false,
          showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log("app.js componentsDidMount");
  }

  shouldComponentUpdate(nextprops,nextstate){
    console.log("app.js shouldcomponentupdate");
    return true;
  }

  componentDidUpdate(){
    console.log("app.js componentdidupdate");
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
              <Aux>
                  <button
                  onClick={() => {
                    this.setState({ showCockpit: false });}}>
                  Remove Cockpit
                  </button>
                  {this.state.showCockpit ? <Cockpit personLength={this.state.persons.length} 
                  clicked={this.toggleDivHandler}>
                  </Cockpit>: null
                  }
                  {person}

               </Aux>
      );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work'));
  }
}

export default withClass(App,classes.App);
