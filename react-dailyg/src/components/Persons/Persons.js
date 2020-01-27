import React , {PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
 constructor(props){
   super()
 }

 /*shouldComponentUpdate(nextProps, nextState) {
  console.log('[Persons.js] shouldComponentUpdate');
  if (nextProps.pers !== this.props.pers) {
    return true;
  } else {
    return false;
  }
  // return true;
}*/

getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('[Persons.js] getSnapshotBeforeUpdate');
  return { message: 'Snapshot!' };
}

// componentWillUpdate() {

// }

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('[Persons.js] componentDidUpdate');
  console.log(snapshot);
}




 render(){
  return( this.props.pers.map((per,index)=>{
                                      return  <Person
                                      click={()=>this.props.clicked(index)}
                                      name={per.name} 
                                      age ={per.age}
                                      change={(event)=>this.props.changed(event,per.id)}
                                      key={per.id}
                                      >My hobbies: footballl</Person>
                                    })
          );
        }
      }


export default Persons;