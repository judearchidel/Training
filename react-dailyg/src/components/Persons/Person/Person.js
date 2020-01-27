import React,{Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';




class Person extends Component {
   
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
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