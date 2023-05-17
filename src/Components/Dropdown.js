import React, {memo ,useState, useEffect, useCallback, updateState, useRef } from 'react'

// function Dropdown() {
//   const { useState, useEffect } = React;

// const data = [{ id: 0, label: "Istanbul, TR (AHL)" }, { id: 1, label: "Paris, FR (CDG)" }];
const country = [
  {
    options: [
      { _id: 1, name: "Performance" },
      { _id: 2, name: "Meetups" },
      { _id: 3, name: "Talks" },
      { _id: 4, name: "Happening" }]
  },
  {
    options1: [
      { _id: 5, name: "Subtitles with English" },
      { _id: 6, name: "Closed Captioning" },
      { _id: 7, name: "Talks" },
      { _id: 8, name: "Happening" }]
  }
];

const Dropdown = (props) => {
  const [isOpen, setOpen] = useState(false);
  // const [items, setItem] = useState(data);
  const [isOpened, setOpened] = useState(false);
  const [newitems, setNewItem] = useState(country);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItem1, setSelectedItem1] = useState('');
  
  const ref = useRef(null);
  // const [, updateState] = React.useState();
  //  const forceUpdate = React.useCallback(() => updateState({}), []);
 
  const toggleDropdown = (e) => {
    setOpen(!isOpen);

}

  const toggleDropdownd = (e) => {
    setOpened(!isOpened);
}

// const toggleDropdownd1 = (e) => {
// setOpened(false);
// }
//  const handleClickOutside = (event) => {
//     if (ref.current && !ref.current.contains(event.target)) {
//       setOpen(false);
//     }
//   };
//   const handleClickOutsided = (event) => {
//     if (ref.current && !ref.current.contains(event.target)) {
//       setOpened(false);
//     }
//   };
  // useEffect(() => {
  //   document.addEventListener('click', toggleDropdownd1, true);
  //   return () => {
  //     document.removeEventListener('click', toggleDropdownd1, true);
  //   };
  // }, []);

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutsided, true);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutsided, true);
  //   };
  // }, []);
  // const handleItemClick = (id) => {
  //   selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  //   console.log(selectedItem);
  // }
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpened(false);
      }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside,true);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside,true);
    };
  }, [ref]);

  const handleItemClick=(id)=>{
    newitems[0]?.options.forEach(contactList => {
      if(contactList._id === id)
           setSelectedItem(contactList.name)
            // setOpen(false)
    });

  }
 
  const handleItemClicked=(id)=>{
   newitems[1]?.options1.forEach(contactList => {
      if(contactList._id === id)
           
            setSelectedItem1(contactList.name)
            // setOpen(false)
    });

  }

  return (
    <>
      <div className="drop">
        <div className='dropdown'>
          <div className='dropdown-header'onClick={toggleDropdown}>
            <div ref={ref}>
              {isOpen ?
               newitems[0]?.options.map((item, i) => {
                  return (
                    <>
                      <div key={i}>
                        <p onClick={() => handleItemClick(item._id)}>{item.name}</p>
                      </div>
                    </>
                  )
                })
                
                :  selectedItem ? selectedItem : "selected option"
              }
         
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className='dropdown2'>
        <div className='dropdown-header' onClick={toggleDropdownd}>
          {/* <div ref={ref}> */}
          {isOpened ?
              newitems[1]?.options1.map((item, i) => {
                return (
                    <>
                      <div key={i}>
                      <p onClick={() => handleItemClicked(item._id)}>{item.name}</p>
                      </div>
                    </>
                  )
                
                 })
                
                 :  selectedItem1 ? selectedItem1 : "select option"
              }
          </div>
        </div>
      </div>

    </>
  )

}

export default memo(Dropdown)

// import React,{useState} from 'react'

// function Dropdown() {
//   const[isActive,setIsActive]=useState(false);
//   const[select,setSelect]=useState('');
//   const options=[
//     {
//               id: "Apple",
//               country: "apple",
//             },
//             {
//               id: "Mango",
//               country: "mango",
//             },
//             {
//               id: "Banana",
//               country: "banana",
//             },
//             {
//               id: "Pineapple",
//               country: "pineapple",
//             },
//   ]
//   return (
//     <div className="dropdown">
//       <div className="dropdown-btn" onClick={(e)=>setIsActive(!isActive)}>choose one</div>
//       {isActive && (
//         <div className="dropdown-content">
//           {options.map((option)=>(
//             <div onClick={(e)=>setSelect(option)}  className="dropdown-item">
//            {option}
//             </div>
//           ))}
//           </div>
//       )}
//     </div>
//   )
// }

// export default Dropdown


// import React,{useState} from 'react'

// function Dropdown() {
//     const data=[ {
//         id: "Apple",
//         country: "apple",
//       },
//       {
//         id: "Mango",
//         country: "mango",
//       },
//       {
//         id: "Banana",
//         country: "banana",
//       },
//       {
//         id: "Pineapple",
//         country: "pineapple",
//       },]
//     const [value, setValue] = useState();
//     const [value1, setValue1] = useState();
//     const handleChange=(e)=>{
//       const {value} = e.target;
//         setValue(value)

//     }
//     const handleChangedrop=(e)=>{
//       const {value1} = e.target;
//       setValue1(value1)
//     }
//     return (
//       <>
//         <select value={value} onChange={handleChange} >

//         {
//           data.length > 0 && data.map((option, index) => (
//               <option key={index} value={option.country}>{option.country}</option>
//           ))
//         }
//       </select>
//        <select value={value1} onChange={handleChangedrop} >

//        {
//          data.length > 0 && data.map((option, index) => (
//              <option key={index} value={option.country}>{option.country}</option>
//          ))
//        }
//      </select>
//      </>
//     )
// }

// export default Dropdown
