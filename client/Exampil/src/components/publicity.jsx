import React from 'react'

const Publicity = () => {
  return (
    <div style={{padding:'3rem', textAlign:"center",color:"#4D4C4C"}}>
      <h1>Revolutionise your learning</h1>
      <p>Ace your NEET preparation with careful created notes, flashcards, video Concepts, etc prepared by NEET Toppers</p>
      <br />
      <br />
      <div className="videos" style={{display:"flex",justifyContent:"space-around"}}>
      <iframe width="620" height="345" src="https://www.youtube.com/embed/9RrXGM0rg9M">
</iframe>
<iframe width="620" height="345" src="https://www.youtube.com/embed/Exo-QceXn64">
</iframe>
      </div>
    </div>
  )
}

export default Publicity
