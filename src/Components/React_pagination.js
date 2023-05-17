import React,{useState} from 'react'
import Json from '../../src/db.json';
import ReactPaginate from 'react-paginate';
console.log(Json);

function React_pagination() {
    const[users,setUsers]=useState(Json.slice(0,75));
    const[pageNumber,setPageNumber]=useState(0);
    const[text, setText]=useState("");
    const[copy,setCopy]=useState(Json.slice(0,75));
    const userPerPages =5
    const pagesVisited=pageNumber * userPerPages;
    const displayUser=users.slice(pagesVisited,pagesVisited + userPerPages)
                     .map((user)=>{
                        return(
                            <div className="user">

                            <h4>{user.id}{user.title}</h4>
                            </div>
                        )
                     })
    
        const pageCount=Math.ceil(users.length/userPerPages);

        const chagePage=({selected})=>{
             setPageNumber(selected)
           
        }   
        const InputEvent=(event)=>{
            const value=event.target.value;
            setText(value);
            const copydata=copy.filter((item)=>{
                 if(item.title.toLowerCase().includes(value))
                 return item
            })
            setUsers(copydata)
        }          
    return (
        <div>
            <div>
            <input type="text"
                        placeholder="search Anything"
                        value={text}
                        onChange={InputEvent}
                    />
            </div>
          {displayUser}
          <ReactPaginate
          previousLable={"Previous"}
          nextLable={"next"}
          pageCount={pageCount}
          onPageChange={chagePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={""}
          activeClassName={"paginationActive"}
           />
        </div>
    )
}

export default React_pagination
