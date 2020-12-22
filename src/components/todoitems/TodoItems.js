import React from 'react';
import './TodoItems.css'
const TodoItems =(props)=>{
    const {items,deleteItem} = props
    let length =items.length;
    const TheItems = length ? (
  items.map((item =>{
        return(
        <div key={Math.random()}>
            <span className="name">{item.name} </span>
            <span className= "age"> {item.age}</span>
            <span className="action icon" onClick={ () => deleteItem(item.id)}> &times;</span>
        </div>
        )
    }
    )
    )
    )
    :
    (
        <p> There is no items </p>
    )

    return( 
        <div className="ListItems">
            <div>  
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className='action title'>Action</span>
            {TheItems}
            </div>
        </div>
    );
}
export default TodoItems;