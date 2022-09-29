import Card from '../../UI/Card'
import { useState } from 'react'
import { programs } from '../../Data'
import { Link } from "react-router-dom"
import '../Home/Home.css'


const Prayer2 = () => {

  const [showFull, setShowFull] = useState(false)

    const  { id, title, info, scripture, full } = programs[0]


   
  return (

     <Card className= 'prayer__card'  key={id}>       
               
                <h1>{title}</h1>
                <p>{info}</p>
               <div   onClick={()=> setShowFull(prev => !prev)}>
               <h3><b>{scripture}</b></h3>

            {showFull && <small>{full}</small>}
            </div>
           
                <Link to='/' className='prayer__btn'>Close</Link>
    </Card>
       
 
  )
}

export default Prayer2