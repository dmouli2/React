import React from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {Main} from './main';

export function Users(props) {
    let printfunction = name=>
        console.log('clicked',name)
    
       const data = props.data;
        return (
            <div className="container">
            <div className="row">
            <div className="card text-center">
                <Header print = {printfunction} data = {data}/>
                <Main  data = {data}/>
                <Footer print = {printfunction} data = {data}/>
               
                    
          </div>      
          </div>      
          </div>      
        )
    

}