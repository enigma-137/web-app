import { GiPrayer } from 'react-icons/gi'
import SectionHead from './SectionHead'
import { Link } from 'react-router-dom'
import { programs } from '../Data'
import Card from '../UI/Card'
const Programs = () => {

 
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<GiPrayer />} title= {`Today's Prayers`} />
    
      <div className="programs__wrapper">
        {
          programs.map(({ id, icon, title, info, path }) => {
            
            return (
              <Card className="programs__program" key={id}>
                <span> {icon} </span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm"> Pray Now <GiPrayer /></Link>
              </Card>
            )
          })
        }
      </div>
      </div>
    </section>
  )
}

export default Programs