
import SectionHead from "./SectionHead"
import {faqs} from '../Data'
import {FaQuestion} from 'react-icons/fa'
import FAQ from "./FAQ"
import '../Pages/Home/Home'

const FAQs = () => {
  return (
    <section className="faqs"> 
    <div className="container faqs__container">
     <SectionHead icon={<FaQuestion />} title = 'Frequestly asked questions'/>

     <div className="faqs__wrapper">
        {
            faqs.map(({id, question, answer}) => {
               return (
               <FAQ key={id} question={question} answer ={answer}/>
               
               )
            })

        }
     </div>
    </div>
    </section>
  )
}

export default FAQs