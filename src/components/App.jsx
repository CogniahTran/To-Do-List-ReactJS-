import React from "react";
import ToDoItem from "../components/ToDoItem";
import InputArea from "../components/InputArea";

function App() {
  
  const [Items, setNewItems] = React.useState([]);
  
  function updateItem(inputText) {
    setNewItems((prevValue) => {
      return [...prevValue, inputText];
    });
  }
  //loop through all items from list of items and delete by id
  function deleteItem(id){ 
    setNewItems((prevValue)  => {
     return prevValue.filter((item, index)=> { 
        return index !== id;
      });  
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea 
          addItem = {updateItem}
        />
      <div>
        <ul>
          {Items.map((todoItem, index) => (
            <ToDoItem 
              key = {index}
              id = {index}
              text = {todoItem}
              onChecked= {deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
