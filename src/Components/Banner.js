import Image from '../images/values.jpg'
import '../Pages/Home/Home.css'

const Banner = () => {
  return (
    <div> 
      <div className='banner__container'>
        <div className="banner__image">
        <img src={Image} className ='values'alt = 'j' />
        </div>
       
        <h1> Join us in promoting God's kingdom</h1>
        <h2> Matt 6:33  Our Code</h2>
    </div>

    </div>
   
  )
}

export default Banner