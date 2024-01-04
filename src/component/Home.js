import React from "react";
import logo from '../logo.svg';

function Home(){
    return(
        <>
         <div className="home">
                       <img src={logo} alt="logo"/>   
                       <h1>React</h1>
                       <p>The library for web and native user interfaces</p>
                       <div className="btn">
                       <button className="btn1">Learn React</button>
                       <button className="btn2">Api Reference</button>
                       </div>
                       
                </div>
        
                
            
        </>
    );
}
export default Home;