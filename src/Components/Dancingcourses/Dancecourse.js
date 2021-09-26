import React,{useState,useEffect} from 'react'
import Product from './Product/Product';
import Cart from '../Cart/Cart';
import './Dancecourse.css'
function Dancecourse() {
    const [danceclasses,setDanceclasses]=useState([]);

    const [cart,setCart]=useState([]);
    
    let danceclassesLoaddata=async()=>{

        let response=await fetch("./danceclassesdetails.json");
        let data=await response.json();
        setDanceclasses(data);

    }
    useEffect(()=>{
      
        danceclassesLoaddata();

    },[]);

    const handleaddTocart=(id)=>{

       let addcart=danceclasses.find((dancecls)=>dancecls.id===id);
       setCart([...cart,addcart]);
       
    }
    
    return (
        <div className="container-fluid dancewrapper">
             
          <div className="row">
              <div className="col-md-9">
                  <div className="row gy-4">
                  {
                      danceclasses.map((danceclass)=>{
                          return <Product key={danceclass.id} danceclass={danceclass} addTocart={handleaddTocart}/>
                      })
                  }
                  </div>
                  
                
              </div>
              <div className="col-md-3 mycartwrapper mr-3">
                 <Cart allproducts={cart}/>
              </div>
           
          </div>
         
      </div>
    )
}

export default Dancecourse
