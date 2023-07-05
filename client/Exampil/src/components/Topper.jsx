import React from 'react'
import pic1 from "../assets/img/Screenshot 2023-07-05 112404.png";
import pic2 from "../assets/img/Screenshot 2023-07-05 112834.png"

const Topper = () => {
  return (
    <div style={{padding:'3rem', textAlign:"center",color:"#4D4C4C"}}>
      <h1>For the Toppers, By the Topper, Of the Toppers</h1>
      <p>Ace your NEET preparation with careful created notes, flashcards, video Concepts, etc prepared by NEET Toppers</p>
      <br />
      <br />
      <div className="videos" style={{display:"flex",justifyContent:"space-around"}}>
      <img width="620" height="345" src={pic1} />
      <img width="620" height="345" src={pic2} />
      </div>
    </div>
  )
}

export default Topper
