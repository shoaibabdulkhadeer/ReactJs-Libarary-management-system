import React, { useEffect, useState } from 'react'
import '../styles/BookLists.css'
import { Link, useNavigate } from 'react-router-dom'
import { RiVipCrownFill} from 'react-icons/ri';
import { RiShieldUserFill } from 'react-icons/ri';


const BookLists = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/books")
      const data = await response.json()
      setBooks(data)
    }
    fetchData()
  }, [books])

  let navigate = useNavigate()

  const Del = (id) => {
 
    alert("deleted")
    fetch(`http://localhost:4000/books/${id}`,{
      method: 'DELETE'
    })

    navigate('/admin/book-Lists') 

  }


  return (
    <div className='BookLists'>
      {books.map((book) => {
        return (
          <Link to={`/admin/book-Lists/${book.id}`}>
          <div className='book'>
            <div className='hidehover'>
                <p> <div className='stickerpara'> <RiVipCrownFill size={30} style={{margin:"5px"}}/>  View Book </div> </p>
            </div>
            <img src={book.imageLink} alt="" width={180} />
            <div className='Details'>
              
            <h3 className='booktitle' style={{display:"flex",alignItems:"center",gap:"5px"}}><RiShieldUserFill /> {book.title}</h3>
            <p className='author'>{book.author}</p>
            <div className='bookpagesyear'>
              <div>
              <p>Pages - {book.pages}</p>
              <p> Year - {book.year}</p>

              </div>
           
              <div>
              <button onClick={() => Del(book.id)} className='Delete'>Delete</button>
              </div>

            </div>
           
            </div>
           

          </div>
          </Link>
        )
      })}

    </div>
  )
}

export default BookLists