
import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setBooks} from '../../../redux/Actions/BookActions';
export default function AddBook() {

    const [bookname,setBookname] = useState('');
    const [bookgenre,setBookgenre] = useState('');
    const [bookStatus,setBookstatus] = useState('');

    const dispatch = useDispatch();
    const books = useSelector((state) => state.allBooks.books);
    
    const addbook=()=> 
    {
     const newbook={
      id:Math.floor(Math.random()*10000),
      bookname:bookname,
      bookgenre:bookgenre,
      bookStatus:bookStatus
    }
    const oldBook = [...books];
    oldBook.push(newbook);
    dispatch(setBooks(oldBook));
    }


  return (
    <>
            <div className="book-form">
    <input type="text" placeholder="Enter book name" onChange={(e)=> setBookname(e.target.value)}/>
    <input type="text" placeholder="Enter book genre" onChange={(e)=> setBookgenre(e.target.value)}/>
    <input type="text" placeholder="Enter book status" onChange={(e)=> setBookstatus(e.target.value)}/>
    <button onClick={()=>addbook()} className="add-student">Add</button>
 </div>
    </>
  )
}
