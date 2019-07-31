import React from 'react'

function Joke(props) {
    return (
        <div className ="Todo-item">
           <h3 style={{display: !props.name && "none"}} >Name: {props.name}</h3> 
           <h3 style={{color: !props.name && "#888888" }} >Price: {props.price}</h3>
           <h3 style={{color: !props.name && "#888888" }} >Description: {props.description}</h3>  
           <hr/> 
        </div> 
    )
}

export default Joke