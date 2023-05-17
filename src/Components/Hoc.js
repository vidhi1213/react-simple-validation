import React from 'react'
import { useState } from 'react'

function Hoc() {
  return (
    <div>
        <h1>HOC</h1>
        <HOC cmp={Counter}/>
        <HOC1 cmp={Counter}/>
        <HOC2 cmp={Counter}/>
    </div>
  )

  function HOC(props)
  {
    return <h2 style={{backgroundColor:'red',width:'300px'}}><props.cmp/></h2>
  }
  function HOC1(props)
  {
    return <h2 style={{backgroundColor:'green',width:'300px'}}><props.cmp/></h2>
  }
  function HOC2(props)
  {
    return <h2 style={{backgroundColor:'blue',width:'300px'}}><props.cmp/></h2>
  }
  function Counter()
  {
    const[counter,setCounter]=useState(0)
    return <div>
        <h3>{counter}</h3>
        <button onClick={()=>setCounter(counter+1)}>counter </button>
    </div>
  }
}

export default Hoc