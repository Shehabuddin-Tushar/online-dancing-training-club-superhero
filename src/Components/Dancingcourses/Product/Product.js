import React from 'react'
import './Product.css'
function Product(props) {

    const {name,category,img,price,star,instructorname,duration,id}=props.danceclass;
    return (
        
              <div className="col-md-4">
                <div className="card singlecard">
                    <img src={img} alt="" height="300px"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5>Category: {category}</h5>
                        
                        <h5>Instructor name : <span style={{color:"red"}}>{instructorname}</span></h5>
                        <h5>Course duration: <span>{duration}</span></h5>
                        <h4><small>$</small>{price}</h4>
                        <h6 style={{color:"goldenrod"}}>{Array(star).fill().map((_,i)=><i key={i} className="fas fa-star"></i>)}</h6>
                        <button onClick={()=>props.addTocart(id)} className="btn btn-warning"><i className="fas fa-shopping-cart"></i> Add to cart</button>
                    </div>
                </div>
            </div>
        
    )
}

export default Product
