import React,{useState} from 'react'
import Popup from '../Components/Popup';
function React_popup() {
    const [isOpen, setIsOpen] = useState(false);
 


 return (<div>
   <input
     type="button"
     value="Click to Open Popup"
     onClick={()=>{setIsOpen(!isOpen)}}
   />
   
   {isOpen && <Popup
     content={<>
       <b>Design your Popup</b>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       <button>Test button</button>
     </>}
     handleClose={()=>{setIsOpen(!isOpen)}}
   />}
 </div>
 )
}


export default React_popup
