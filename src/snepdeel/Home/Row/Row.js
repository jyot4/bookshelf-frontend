
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import "../Home.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import book from "../../../book.jpg"
import "./Row.css"


function Row(props) {
    const [books, setBooks] = useState([])
    useEffect(() => {


        //  let api =  AIzaSyC1D8WIkBINjc6GWc63579oia1BGoNYFcc


        axios.get(props.endpoint)

            .then((result) => {
                console.log(result.data.items)
                setBooks(result.data.items)

            }).catch((err) => console.log(err))

    }, [])
    function titleEditer(data) {
        return (data.length > 20) ? data.slice(0, 20) + "...." : data
    }
    return (
        <div className='wrapper'>
            <h1>{props.heading}</h1>
            <div className='book'>
                <div className='arrow'>
                    <Link to="">< ArrowBackIosIcon/></Link>
                    <Link to=""><ArrowForwardIosIcon/></Link>

                </div>
                {
                    books.map((data, index) => {
                        return <div className='box' key={index}>
                            <img src={ (data?.volumeInfo?.imageLinks?.thumbnail) ?data.volumeInfo.imageLinks.thumbnail :"" }alt='chal' ></img>
                            <h1>{titleEditer(data.volumeInfo.title)}</h1>
                            {/* <h2>{}</h2> */}
                            <h3><span><RemoveRedEyeOutlinedIcon /></span><span><FavoriteBorderIcon /></span></h3>
                        </div>

                    })
                }
            </div>
        </div>

    )
}

export default Row