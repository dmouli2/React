import React from 'react';
import './index';
 export class Header extends React.Component{

    render(){
        const header = 
            <div className="header">
                Header Component

                <h1>{this.props.text}</h1>
            </div>;

        return (
            header
        )
    }
}
