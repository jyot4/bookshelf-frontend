import React from 'react'
import { Link } from "react-router-dom"
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';



function Footer() {
  return (
    <>
      <div className='footer_main'>
        <div className='footer'>
          <p><EmailIcon /> jyotivyass2000@gmail.com</p>
          <p><PhoneIphoneIcon />+1 5589 55488 55</p>
          </div>
          <div className='footer1'>
            <ul>
              <li>
                <Link to="https://www.linkedin.com/in/jyoti-vyas-901993244/" className='icon'> <LinkedInIcon /></Link></li>
              <li><Link to="https://github.com/jyot4" className='icon'> <GitHubIcon /></Link></li>
              <li> <Link to="https://mail.google.com/mail/u/0/#inbox" className='icon'><EmailIcon /></Link></li>



              {/* <li>priya</li> */}
            </ul>

         
        </div>

      </div>
    </>
  )
}

export default Footer