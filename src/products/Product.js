import React from 'react';

export class Product extends React.Component{
    render(){
        return (
            <div className="col-2">
                <div className="card text-center">
                    <div className="card-header">
                        {this.props.data.id}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.name}</h5>
                        <p>{this.props.data.count}</p>
                        <input type="number" id="valeue" onChange = {
                            ()=>{
                                // alert(this.event.target.value)
                                var value = document.getElementById('valeue').value
                                this.props.addCart(value);
                            }
                        }
                        
                        />

                        <button className="btn btn-primary" onClick = {
                                    ()=>{
                                       this.props.click(this.props.data);

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