import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success");
  };
  
  const handleDownClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase","success");
  };
  
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Cleared Text","success");
  };
  
  const handleTitleClick = () => {
    function titleCase(str) {
      return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    }
    
    let newtext = titleCase(text);
    setText(newtext);
    props.showAlert("Converted to TitleCase","success");
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to ClipBoard","success");
  };
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces are removed","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // setText("new text"); //right way
  return (
    <>
      <div className="container" style={{color: props.mode==="dark"?"white":"#2f5a82"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange= {handleOnChange} style={{backgroundColor: props.mode==="dark"?"#2f5a88":"white", color: props.mode==="dark"?"white":"#2f5a82"}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTitleClick}>
          Convert to TitleCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"#2f5a82"}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview it here"}</p>
      </div>
    </>
  );
}
