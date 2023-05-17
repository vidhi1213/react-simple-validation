import React,{useState} from 'react'

function React_Accodian({title,children}) {
    const[isOpen,setOpen]=useState(false)
    return (
        <>
        <div className="accodian-wrapper">
        <div className={`accodian-title ${isOpen} ? "open": ""} `} onClick={() => setOpen(!isOpen)}>
      {title}
        </div>  
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
          
        </div>
        </>
    )

}


export default React_Accodian
