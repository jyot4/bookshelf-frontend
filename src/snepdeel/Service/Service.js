import React from 'react'
import service from './service.jpeg'
import   './Service.css'

function Service() {
  return (
    <>
    <div className='service-main'>
      <div className='service-left'>
    <h1>"Echoes of Imagination: A Bookshelf Odyssey"</h1>
    </div>
    <div className='service-right'>
      <img src={service}/>
    </div>
   

    </div>
    <div className='service-content'>
      <div className='service-content1'>
      <h1>Book Search and Discovery</h1>
      <p>Easily navigate through our extensive collection of books using our powerful search and discovery feature. Search by title, author, or genre to quickly find the books you're interested in. Discover new reads that match your preferences and explore various genres to expand your literary horizons.</p>

      </div>
      <div className='service-content2'>
      <h1>Secure User Authentication</h1>
      <p>
Your account security is a top priority. We utilize robust authentication measures to safeguard your personal information and ensure that your interactions on the platform are secure.</p>
</div>
<div className='service-content3'>
      <h1>Rating and Reviews</h1>
      <p>
Share your thoughts and insights by providing ratings and reviews for the books you've read. Your reviews help other users make informed decisions while fostering a sense of community among readers. Read reviews from fellow readers to gain insights into the books you're considering.</p>
</div>
<div className='service-content4'>
      <h1>Friend Connections</h1>
      <p>
Connect with friends who share your passion for reading. Send and accept friend requests to stay connected and engaged with each other's reading journeys. Explore what your friends are reading, their reviews, and recommendations to find new books to enjoy.</p>
</div>
<div className='service-content5'>
<h1>User Profiles</h1>
      <p>
Create and personalize your user profile to showcase your reading activity, liked books, and reviews. Customize your profile with avatars and personal details to reflect your reading personality and connect with others who share similar interests.</p>

</div>

<div className='service-content6'>
<h1>Book Insights and Details</h1>
      <p>
Delve into detailed book pages that provide comprehensive information, including cover images, descriptions, ratings, reviews, and related details. Make informed decisions about your reading choices with a wealth of insights at your fingertips.</p>
</div>
    </div>
   
    </>
  )
}

export default Service