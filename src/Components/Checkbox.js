import React, { useState } from 'react'

function Checkbox() {
    let data=[
        {name:'apple'},
        {name:'banana'},
        {name:'pineapple'},
        {name:'graps'},
        {name:'lichi'},
        {name:'watermalon'},
    ]
const [option,setOption]=useState(data)

const handleChange=(e)=>{
    const{name,checked}=e.target;
    if(name==="allSelect"){
        let tempUser=option.map((user)=>{return {...user,ischecked:checked}})
        setOption(tempUser)
    }
    let tempUser=option.map((user)=>user.name ===name ? {...user,ischecked:checked}:user)
    setOption(tempUser)
}
  return (
    <>
    <div>Checkbox</div>
    <div>
        <input type="checkbox" 
        name="allSelect"
         onChange={handleChange}
         checked={option.filter((user)=>user?.ischecked !== true).length < 1} />
        <label>All Select</label>
    </div>
    {option.map((item,i)=>{
       return(
        <>
         <input type="checkbox" name={item.name} checked={item.ischecked ||false} onChange={handleChange}/>
        <label>{item.name}</label>
        </>
       )
    })}
    </>
    
  )
}

export default Checkbox