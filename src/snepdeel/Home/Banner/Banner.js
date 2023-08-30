import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./Banner.css"
import requests from '../requests'
import BannerImage from "../../../book.jpg"


function Banner() {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        axios.get(requests.fetchmostpopular)
            .then((result) => {
                console.log(result.data.items)
                setBanner(result.data.items[Math.floor(Math.random() * Number(40))])
            })
    })
    console.log(banner)
    return (
        < div className='banner'>
            <div className='imageOverContent' >
                {/* <h1>{banner.volumeInfo.title}</h1> */}
                {/* <p>{banner.volumeInfo.categories.description}
                </p> */}
                <h1>BooksShelf</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                <Link to="/sign">Sign In</Link>
            </div>
            <div className='image'>
            <img src={ (banner?.volumeInfo?.imageLinks?.thumbnail) ?banner.volumeInfo.imageLinks.thumbnail :"" }alt='chal' ></img>
            </div>

        </div>
    )
}

export default Banner