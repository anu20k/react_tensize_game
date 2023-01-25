import React from "react"
import Die from "./component/Die"
import {nanoid} from "nanoid"
import "./App.css"
import Confetti from "react-confetti"

export default function App() {

  const [dice, setDice] = React.useState(allDicenum())
  const [tenzies, setTenzies]=React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die =>die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTenzies(true)

    }
  }, [dice])
  function generateNewDie(){
    return {
      value:Math.ceil(Math.random()*6),
      isHeld: false,
      id: nanoid()
    }
  }
  function allDicenum() {
    const newdice = []
    for( let i=0; i<10;i++){
           newdice.push(
           generateNewDie()
          
          
            )
    }
     return newdice;
  }
  
  function rollDice()
  {
    if(!tenzies){
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
        die:
        generateNewDie()
      }))
  
    }
    else{
       setTenzies(false)
       setDice(allDicenum())
    }
    
  }

  function holdDice(id)
  {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
      { ...die, isHeld: !die.isHeld} :
      die
    }))
  }
const diceElement = dice.map(die => 
<Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>
)
  return(
    <main>
      {tenzies && Confetti}

      <div className="die-container">
        {diceElement}
       
      </div>
      <button onClick={rollDice}>
        {tenzies ? "New game" : "Roll"}
        </button>
    </main>
  )
}
