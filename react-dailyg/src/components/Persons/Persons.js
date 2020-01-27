import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.pers.map((per,index)=>{
    return  <Person
    click={()=>props.clicked(index)}
    name={per.name} 
    age ={per.age}
    change={(event)=>props.changed(event,per.id)}
    key={per.id}
    >My hobbies: footballl</Person>
  })




export default Persons;