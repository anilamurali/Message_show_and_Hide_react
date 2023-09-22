import React, { useState } from 'react'

const Home = () => {
    const [message,setMessage]=useState("");
    function showMessage() {
        setMessage("React is a JavaScript library for building user interfaces.");
        
    }
    function hideMessage() {
        setMessage(" ");
        
    }
  return (
    <div style={{textAlign:'center',marginTop:'230px',marginBottom:'270px'}}>
        <h3 className='text-primary mb-3'>{message}</h3>
        <button className="btn btn-danger mx-3" onClick={showMessage}>Show Message</button>
        <button className="btn btn-dark" onClick={hideMessage}>Hide Message</button>

        
    </div>
  )
}

export default Home