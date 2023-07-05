import React from 'react'

const Learn = () => {
  return (
    <div style={{padding:'3rem', textAlign:"center",color:"#4D4C4C",background:"#fcecbd"}}>
      <h1>Learn from our Toppers</h1>
      <p>Ace your NEET preparation with careful created notes, flashcards, video Concepts, etc prepared by NEET Toppers</p>
      <br />
      <br />
      <div className="videos" style={{display:"flex",justifyContent:"space-around"}}>
      <img width="320" height="345" src="https://i1.wp.com/exampil.com/wp-content/uploads/2021/01/image-removebg-preview.png?fit=186%2C185&ssl=1" />
      <img width="320" height="345" src="https://i0.wp.com/exampil.com/wp-content/uploads/2021/01/image-removebg-previewc.png?fit=189%2C189&ssl=1" />
      <img width="320" height="345" src="https://i1.wp.com/exampil.com/wp-content/uploads/2021/01/image-removebg-preview.png?fit=186%2C185&ssl=1" />
      </div>
    </div>
  )
}

export default Learn
