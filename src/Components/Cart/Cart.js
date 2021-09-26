import React from 'react'
import './Cart.css'

function Cart(props) {

    const allproduct=props.allproducts;

    let total=0;

    for(let item of allproduct){
        total=total+item.price;
    }
    
    return (
        <div className="cart">
            <h2>Order summary</h2>
            <h3><span style={{color:"green"}}><i className="fas fa-angle-double-right"></i> Course added: </span>{allproduct.length}</h3>
            <h3><span style={{color:"green"}}><i className="fas fa-angle-double-right"></i> Total cost: </span>${total.toFixed(2)}</h3>

            {
                allproduct.map((product)=>{
                    return ( <div className="course-title d-flex align-items-center">
                                <img src={product.img} alt="" height="50"/>
                                <h3 style={{marginLeft:"5px",textAlign:"center"}}>{product.name}</h3>
                              </div>)
                })
            }
           
            <div className="d-grid gap-2 mt-2">
                {
                    total>0?<button className="btn btn-primary" type="button">Checkout</button>:<h2>You have not added courses to the cart</h2>
                }
              
               
            </div>
            
        </div>
    )
}

export default Cart
