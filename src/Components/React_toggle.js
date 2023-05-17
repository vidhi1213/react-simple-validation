import React from 'react'
import React_Accodian from './React_Accodian';
import Materia_react_tab from './Materia_react_tab'
function React_toggle() {
    const [on, setOnState] = React.useState(false);
 
  return (
      <>
      <div className="App">
    { on? <React_Accodian/>:<Materia_react_tab/>}
      </div>
    <button class={on ? ' on' : 'off'}  onClick={(e)=>{setOnState(!on)}}>
      <span class="pin" />
    </button>
    </>
  );
}

export default React_toggle
