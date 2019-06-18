import React, {Component} from 'react';
import { Product } from './Product';




export class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProduct:[

            ],
            products:[   
                {
                    id:1,
                    count:0,
                    name:'Vivo',
                    price:15000
                },
                {
                    id:2,
                    count:0,
                    name:'Samsung',
                    price:20000
                },
                {
                    id:3,
                    count:0,
                    name:'I-Phone',
                    price:40000
                }
            ]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addtoCart = this.addtoCart.bind(this);
    }

    handleSubmit(prod){
        console.log(prod,this)
        this.setState(
            {
                selectedProduct:this.state.selectedProduct.concat([prod]),
                products:this.state.products.filter(
                    selectedProduct => prod.id !== selectedProduct.id
                )
            }
        )
        // selectedProduct
    }
    addtoCart(prod){
        console.log(prod,this)
        this.setState(
            {
                products:this.state.products.count+prod 
                
            }
        )
        // selectedProduct
    }
    render(){
                return (
                <div className="row">
                   <h1>Number of Products : {this.state.products.length}</h1>
                   {
                       this.state.products.map(product =>
                        <Product key={product.id} data = {product} click={this.handleSubmit} addCart={this.addtoCart}/>
                    )}
                </div>
            );
    }
}