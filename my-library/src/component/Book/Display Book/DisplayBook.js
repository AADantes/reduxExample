import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

export default function DisplayBook() {
    const books = useSelector((state) => state.allBooks.books);
    console.log(books);

  return (
    
    <table className="book-table">
      <thead>
      <tr>
          <th>#</th>
          <th>Book Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>



<tbody>
{
  books.map((books) => {
    return(
      <tr key={books.id}>
        <td>{books.id}</td>
        <td>{books.bookname}</td>
        <td>{books.genrename}</td>
        <td>{books.status}</td>
        <td>Actions</td>
    </tr>
    )
})

}
</tbody>
</table>
  )
}