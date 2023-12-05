import Display from "./components/Display"
import Buttons from "./components/buttons"
import './App.css'
import styles from "./App.module.css"
import { useState } from "react"

function App() {

  // Hook for the calculator.
  const [calval, setcalval] = useState("");


  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setcalval("")
    }else if(buttonText === '='){
      const result = eval(calval)             //! eval() is a method to convert any String into expression
      setcalval(result)
    }else{
       const newDisplayValue= calval + buttonText;
       setcalval(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator} >
      <Display displayValue={calval} />
      <Buttons onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
