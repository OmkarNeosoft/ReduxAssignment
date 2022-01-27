import React from 'react'
import json from './Product.json';
import {connect} from 'react-redux';

function Product(props) {
    return (
        <div className="card-columns">
             { json.map((pro) =>{
                 return(
                  <>
                      <div className="card bg.light">
                      <div className="card-body">
                          <img className="card-img-top" height="300px" src={pro.images}></img>
                          <p className="card-text">
                              Product Name: {pro.pname}<br/>
                              Price: ${pro.price}<br/>
                              Quantity: {pro.quantity} 
                          </p>
                          <button className="btn btn-info" onClick={()=>addCart(pro.id,props)}>
                              <i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                      </div>
                      </div>
                 </>
                 )
             })}
        </div>
    )
}

const addCart=(id,props)=>{
    if(localStorage.getItem('mycart')!=undefined){
       let arr=JSON.parse(localStorage.getItem('mycart'));
       if(arr.includes(id)){
           alert("Product Already added");
       }
       else {
       arr.push(id);
       localStorage.setItem('mycart',JSON.stringify(arr));
       alert("Product Added to Cart");
      props.counter();
       }
    }
    else {
        let arr=[];
        arr.push(id);
        localStorage.setItem('mycart',JSON.stringify(arr));
        alert("Product Added to Cart");
        props.counter();
    }
 }

  const mapDispatchToProps=(dispatch)=>{
    return{
      counter:function(){
        dispatch({type:'ADD',payload:1})
      }
    }
  }
  
export default connect(null,mapDispatchToProps)(Product);
