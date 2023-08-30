import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
// import logo from "../../juCUFrK (1).png"
import { useNavigate } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios'
import { searchContext } from '../First'
import Favorite from '../Favorite/Favorite';

// import axios from 'axios'

function Header() {
  const { setSearchBooksData, favoriteBooks } = useContext(searchContext)

  const [inputValue, setInputValue] = useState("")
  const nevigate = useNavigate()
  const session = localStorage.getItem("session")

  function handleSubmit(e) {
    e.preventDefault()
    axios.post("http://localhost:8080/searchbooks", { inputValue, session })
      .then((result) => {
        setSearchBooksData(result.data)
        console.log("aa gya searchbooksdata");
        nevigate("/searchbooks")
        console.log(result.data)
      })

  }

  function likeHander() {
    let likeChanges = false;
    if (favoriteBooks.length !== 0) {
      likeChanges = true
    }
    return likeChanges
  }

  function handleLogout(e) {
    e.preventDefault();
   localStorage.setItem("session","")
   nevigate("/sign")
  }
  // console.log(favoriteBooks)


  return (
    <>
      <header>
        <div className='topHeader'>
          <h1>BookShelf</h1>
          <div className='searchButton'>
            <form mathod="post" onSubmit={handleSubmit} >
              <input autoFocus type='text' placeholder='Enter product name'
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value) }}
              ></input>
              <button type='submit'>Search</button>
            </form>
          </div>
          <ul>
            <li>{
              likeHander()
                ?
                <Link className='first' to="/favorite"><FavoriteIcon /></Link>
                :
                <Link className='first' to="/favorite"><FavoriteBorderIcon /></Link>
            }
            </li>
            <li>{
              (localStorage.getItem("session")) ? <Link onClick={handleLogout} >Logout</Link> : <Link to="/sign" >Login</Link>
            }
            </li>
          </ul>
        </div>
        <div className='bottomHeader'>
          <ul>
            <li>
              <Link to="/">Home</Link>

            </li>
           
            <li>
              <Link to="/about">About</Link>

            </li>
            <li>
              <Link to="/product">Books</Link>

            </li>
           
            <li>
              <Link to="/service">Service</Link>

            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header