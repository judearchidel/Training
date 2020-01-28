import React ,{useEffect,useRef, useContext}from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../Contex/Authcontext';


const cockpit = (props) => {
  const toglebtn = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

    useEffect(() => {
                      console.log('Cockpit.js useEffect');
                      
                   //   setTimeout(() => {
                   //     alert('Saved data to cloud!');
                    //  }, 1000);
                    toglebtn.current.click();
                      return () => {
                        console.log('Cockpit.js cleanup work in useEffect');
                      };
                    }, []);
                  

    useEffect(() => {
                  console.log('Cockpit.js 2nd useEffect');
                  return () => {
                    console.log('Cockpit.js cleanup work in 2nd useEffect');
                  };
                });
    




let btnclass =[classes.Button]
if(props.show){
           btnclass.push(classes.Red);
          }
let clas=[]

if(props.personLength <=2){
                            clas.push(classes.red);
                            }
if(props.personLength <2){
                            clas.push(classes.bold);
                            }

return(
        <div> 
            <h1>Persons Details</h1>
            <p className={clas.join(" ")}>The conditional styling</p>
            <button className={btnclass.join(" ")}
            ref={toglebtn}
            onClick={props.clicked}>Switch names</button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
}

export default React.memo(cockpit);