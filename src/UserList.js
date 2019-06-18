import React, {Component} from 'react';
import { User } from './User';



let printFunc = function(data){
    console.log('called from the print function inside UserList component');
    console.log(data);
}

export class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[   
                {
                    id:1,
                    name:'Vivo',
                    price:15000
                },
                {
                    id:2,
                    name:'Samsung',
                    price:20000
                },
                {
                    id:3,
                    name:'I-Phone',
                    price:40000
                }
            ]
        };
    }

    
    render(){
                return (
                <div className="row">
                    <h1>Users Length : {this.state.users.length}</h1>
                    {this.state.users.map(user => {
                    return <User  key={user.id} data={user} print={printFunc}/>
                    })}
                </div>
            );
    }
}