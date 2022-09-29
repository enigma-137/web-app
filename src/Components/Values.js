import Image from '../images/value.jpg';
import SectionHead from './SectionHead';
import { GiCutDiamond } from 'react-icons/gi';
import { values } from '../Data';
import Card from '../UI/Card';
import '../Pages/Home/Home'

const Values = () => {

 
  return (
  
   <section className='values'>
    <div className="container values__container">
   <div className="values__left">
    <div className="values__image">
      <img src={Image} alt="" />
    </div>
   </div>
   
    {/* {
  
} */}
<div className="values__right">
<SectionHead icon={<GiCutDiamond />} title ={"Our Core Values"} />
 <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque?
 </p>
 <div className='values__wrapper'>
{
   values.map(({id, icon, title, desc}) => {
    return (
<Card className='values_value' key={id}>
   <span>{icon}</span>
   <h4>{title}</h4>
   <small>{desc}</small>


   </Card>
    )}
  )
}
 </div>
</div>
  
    </div>
   </section>
 
  )
}

export default Values