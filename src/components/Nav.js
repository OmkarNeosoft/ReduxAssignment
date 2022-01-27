import React from 'react'
import {connect} from 'react-redux';

function Nav(props) {
    return (
                <>
        <nav class='nav'>
        <a class="nav-link active" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">MyCart {props.mycounter}</a>
        <a class="nav-link" href="#">Contact Us</a>
        </nav> 
        
       </>
    )
}

const mapStateToProps=(state)=>{
  return {
    mycounter:state.count
  }
}
  
  

export default connect(mapStateToProps,null)(Nav);






