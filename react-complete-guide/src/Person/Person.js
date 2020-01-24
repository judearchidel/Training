import React,{Component} from 'react';
import './Person.css';

const person = (props)=>{
    return( 
        <div className="person">
        <h1 onClick={props.click}>i am {props.name} with age :{props.age}</h1>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}></input>
        </div>
        );

    }

export default person;