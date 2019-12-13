import React, { useState } from 'react';

function NewPostArea(props)
{
    const [text,setText] = useState("");
    
    function handleChange(event)
    {
        setText(event.target.value);
    }


    function HandleClick()
    {
        props.onAdd(text);
        setText("");
    }



  

    return(
        <div>
        <textarea onChange={handleChange} value ={text} className="new-post-area" placeholder="Please Write Something!!">
        </textarea>
        <button onClick={ HandleClick }> Post!! </button>
        </div>
    );
}

export default NewPostArea;