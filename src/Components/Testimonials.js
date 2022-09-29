import '../Pages/Home/Home.css'
import { useState } from 'react'
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/Card'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import {testimonials} from '../Data'


const Testimonials = () => {
  const [index, setIndex] = useState(2);
  //setting the usestate to 1 will bring the second object in the array
 const {id, name, quote, job, avatar} = testimonials[index];
 //destructuring the testimonials data to get the individual props and setting it to the index

 const prevTestimonyHandler =() =>{
  setIndex(prev => prev - 1)
  //get the prev state - 1

  if(index <= 0){
    setIndex(testimonials.length - 1);
    //if the index is less than zero, set it back to the last child of the array 
    
  }
 }

 const nextTestimonyHandler =() =>{
  setIndex( prev => prev + 1)

  if(index >= testimonials.length - 1){
    setIndex(0);
    //but if the index is less than the highest lenght of the index, set it back to zero
  }
 }


  return (
   <section className="testimonials">
    <div className="container testimonials__container">
    <SectionHead icon={<ImQuotesLeft />} title = 'Testimonies' className='testimonial__head'/>
  <Card className= 'testimonials' key={id}>
    <div className="testimonial__avatar">
      <img src={avatar} alt="image2sss" />
    </div>
<p className="testimonial__quote">
  {`"${quote} "`} </p>
  <h5>{name}</h5>
  <small className='testimonial__title'>{job}</small>


  </Card>
  <div className="testimonials__btn-container">
    <button className='testimonials__btn'  onClick={prevTestimonyHandler}>
      <IoIosArrowDropleftCircle/>
    </button>
    <button className='testimonials__btn'  onClick={nextTestimonyHandler}>
      <IoIosArrowDroprightCircle  />
    </button>
  </div>
    </div>
   </section>
  )
}

export default Testimonials