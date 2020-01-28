import React,{Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../Contex/Authcontext';



class Person extends Component {
   
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

  static contextType = AuthContext;

    componentDidMount(){

        this.inputElementRef.current.focus();
    }
   
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
      }
      
    
    render(){
        console.log(":person .... rendering");
            return( 
                 <Aux>
                 {this.context.authenticated ? (
                    <p>Authenticated!</p>
                  ) : (
                    <p>Please log in</p>
                  )}
          
                    <h1 onClick={this.props.click}>
                    i am {this.props.name} with age :{this.props.age}</h1>
                    <p>{this.props.children}</p>
                    <input type="text" 
                    ref={this.inputElementRef}
                    onChange={this.props.change} 
                    value={this.props.name}></input>
                </Aux>
                );

            }
    }

    Person.propTypes ={
        click: PropTypes.func,
        name: PropTypes.string,
        age: PropTypes.number,
        change: PropTypes.func
    }

export default withClass(Person,classes.person);