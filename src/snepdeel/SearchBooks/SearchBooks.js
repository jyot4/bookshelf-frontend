import React from 'react'
import { useContext } from 'react'
import { searchContext } from '../First'
import { Link, Navigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./SearchBooks.css"

function SearchBooks() {
    const Navigate = useNavigate()
    const { searchBooksdata ,setSearchBookShow } = useContext(searchContext)
    console.log(searchBooksdata)
    function handleShowBooks (e , book){
        e.preventDefault()
        setSearchBookShow(book)
        Navigate("/SingleShowBook")

    }

    return (
        <>
            <div className='searchBooks'>
                {
                    searchBooksdata.map((book, index) => {
                        return <Link className='bookLink' to=""  onClick={(e)=>handleShowBooks(e, book)} key={index}>
                            <div className='searchBook'>
                                <img src={book.image} alt='images'></img>
                                <p>{book.bookType.slice(0, 1).toUpperCase() + book.bookType.slice(1)}</p>
                                <h1>{(book.title.length > 25) ? book.title.slice(0, 30) + "..." : book.title}</h1>
                                <h3>{`${"By - "}${book.author}`}</h3>

                            </div>
                        </Link>
                    })
                }
            </div>
        </>
    )
}

export default SearchBooks