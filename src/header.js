import React from 'react';
import  Logo from 'pics/logo192.png'
function Header(){
   
    return (
        <header>
            <nav className="navs">
                <div class="left-header">
                <img className="image" src={Logo}  alt="this is my logo" />
                <h1>ReactFacts</h1>
                </div>
                
                <div class="right-header">
                    <h3>React Course-Project 1</h3>
                </div>
            </nav>
        </header>
    )  
    }    

export default Header;   