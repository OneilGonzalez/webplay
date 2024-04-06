import { useState } from "react";

function ListGroup() {
  let items=[
    'New York','San Francisco','Tokyo','London','Paris'];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Hook - allows us to tap into built in features in react
  
  
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item,index)=> 
          <li 
            className= {selectedIndex == index ? 'list-group-item active' : 'list-group-item'}
            key={item} 
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li> //on real world add item.id for the key (first item in the line)
        )}
      </ul>
    </>
  );
} 

export default ListGroup;
