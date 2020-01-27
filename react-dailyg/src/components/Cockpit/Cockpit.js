import React from 'react';
import classes from './Cockpit.css';
const Cockpit = (props) => {

let btnclass =[classes.Button]
if(props.show){
                btnclass.push(classes.Red);
             }
let clas=[]
if(props.persons.length <=2){
                            clas.push(classes.red);
                            }
if(props.persons.length <2){
                            clas.push(classes.bold);
                            }

return(
        <div> 
            <h1>Hi, React App</h1>
            <p className={clas.join(" ")}>The conditional styling</p>
            <button className={btnclass.join(" ")}
            onClick={()=> props.clicked("jovitta")}>Switch names</button>
        </div>
    );
}

export default Cockpit;