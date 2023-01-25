import React from 'react'
import "../App.css"


export default function Die(prop) {

    const styles = {
      backgroundColor: prop.isHeld ? "#59E391" : "white"
    }

  return (

   
       <div className='die-face' style={styles} onClick={prop.holdDice}>
         <h2 className='die-num'>{prop.value}</h2>
         
    </div>
    
   

    

  )
}
