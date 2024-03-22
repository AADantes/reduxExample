
import React,{useState} from 'react';
export default function AddBook() {

    const [bookname,setBookname] = useState('');
    const [bookgenre,setBookgenre] = useState('');
    const [bookStatus,setBookstatus] = useState('');

  return (
    <>
            <div className="book-form">
    <input type="text" placeholder="Enter book name" onChange={(e)=> setBookname(e.target.value)}/>
    <input type="text" placeholder="Enter book genre" onChange={(e)=> setBookgenre(e.target.value)}/>
    <input type="text" placeholder="Enter book status" onChange={(e)=> setBookstatus(e.target.value)}/>
    <button class="add-book">Add</button>
 </div>
    </>
  )
}
