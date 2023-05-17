import React from 'react'
import React_Accodian from '../Components/React_Accodian';

const tabContent = [
  {
    title: "Why is the sky blue?",
    content:  "Sunlight reaches Earth's atmosphere and is scattered in all directions by",
   
  },
  {
    title: "What's It Like Inside Jupiter?",
    content:  "Sunlight reaches Earth's atmosphere and is scattered in all directions by",
  },
  {
    title: "What Is a Black Hole?",
    content:  "Sunlight reaches Earth's atmosphere and is scattered in all directions by",
  },
];
const Accodian=()=> {

    return (
        <div className="wrapper">
  
       {tabContent.map((tab, idx) => (
                <React_Accodian key={idx} title={tab.title}>
                  {tab.content}
                </React_Accodian>
              ))}
              
  
  </div>
    )
}

export default Accodian;
