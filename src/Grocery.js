import React from "react";

const Grocery = ({ id, name, complete,  groceryClick}) => (
  <li 
    style={ complete ? {...styles.grocery, ...styles.complete } : styles.grocery }
    onClick={ () => groceryClick(id) }
    >
      {name}
    </li>
);

const styles = { 
  grocery: { color: "grey", textDecoration: "line-through" },
};


export default Grocery; 