import Card from '../../UI/Card'
import {FiCornerRightDown} from 'react-icons/fi'
import { useState } from 'react'
import { programs } from '../../Data'
import { Link } from "react-router-dom"
import '../Home/Home.css'


const Prayer1 = () => {

  const [showFull, setShowFull] = useState(false)

    const  { id, title, info, scripture, full } = programs[0]


   
  return (

     <Card className= 'prayer__card'  key={id}>     
      <Link to='/' className='prayer__btn'>Close</Link>  
               
                <h1>{title}</h1>
                <p>{info}</p>
               <div   onClick={()=> setShowFull(prev => !prev)}>
                <small><i>Click the scripture reference to open scripture</i></small>
              <span> <FiCornerRightDown /></span>

               <h3><b>{scripture}</b></h3>
              
            {showFull && <small>{full}</small>}
            </div>
           
               
    </Card>
       
 
  )
}

export default Prayer1