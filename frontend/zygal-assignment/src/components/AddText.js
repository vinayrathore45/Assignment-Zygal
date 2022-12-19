import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const AddText = ()  => {

    const [addText, setAddText] = useState("");
    
    const navigate = useNavigate();
  
    const submitHandler = async (e) => {
      e.preventDefault();
    
      try {
        const res =  await axios({
          url: "http://localhost:5000/newText",
          method: "post",
          data: {
            text: addText
          }
         
        });
        alert(res.data.message);
        navigate("/");
        setAddText("");
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div className="auth-form-container">
        <form className="add-text" onSubmit={submitHandler}>
          <h2>AddText</h2>
          <label htmlFor="email">userName</label>
          <input
            value={addText}
            onChange={(e) => setAddText(e.target.value)}
            type="text"
            placeholder="write text here"
            id="text"
            name="text"
          /><br/>
          <button type="submit">submit</button>
        </form>
      </div>
    );
    

}

export default AddText