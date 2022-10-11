import React from "react";

function InputArea(props){
    const [inputText, setInput] = React.useState("");

    function handleInput(event) {
        const newValue = event.target.value;
        setInput(newValue);
      }
    return (
        <div className="form">
        <input onChange={handleInput} value={inputText} type="text" />
        <button onClick={() => { props.addItem(inputText); setInput(""); } }>
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea;