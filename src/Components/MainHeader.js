import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png';


const MainHeader = () => {
  return (
   <header className='main__header'>
  <div className='container main__header-container'>
     <div className='main__header-left'>
      <h4> #100DaysOfKingdomPrayers</h4>
      <h1> Join the legend of Kindgom Giants</h1>
      <p> 
 Prayer is woven into all that we do at Youth for Christ. Our year is marked by many prayer sessions and events, including daily prayer stops, termly three-day prayer events and twice-yearly prayer days, among other prayer campaigns. We pray over every aspect of our ministry for we know that it is only by God’s Spirit that we can do anything lasting into eternity. We are always on the lookout for those who will help us in this ministry of reconciliation between God and young people by praying for and with us.
      </p>
      <Link to='/plans' className='btn lg'>Get started </Link>
     </div>
     <div className='main__header-right'>
      <div className="main__header-circle"></div>
      <div className="main__heaader-image"><img src={Image} alt='' />
      </div>
     </div>

  </div>
   </header>
  )
}

export default MainHeader