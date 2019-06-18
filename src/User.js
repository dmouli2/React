import React from 'react';

export class User extends React.Component{

    constructor(props){
        super(props);
        this.state={
            selected:false,

        }
    }

    render(){
        console.log("executing the render method in the User component ");
        console.log(this.state);
        return (
            <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-header">
                        {this.props.data.id}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.name}</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-primary" onClick = {
                                    ()=>{
                                       
                                            this.setState({selected: !this.state.selected});
                                       
                                    }
                                }>Details</button>
                    </div>
                    <div className="card-footer text-muted">
                        {this.props.data.team}
                    </div>
                </div>
            </div>
            
        );
    }
}