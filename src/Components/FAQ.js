import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'


const FAQ = ({ question, answer }) => {

    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <article className="faq"  onClick={()=> setShowAnswer(prev => !prev)}  >
             {/*switch between the previous and current bstate  */}
            <div>
                <h4>
                    {question}
                </h4>
                <button className="faq__icon"  >
                    {/* If the answer is showing/not swith plus/minus  */}
                    {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>

            {showAnswer && <p>{answer}</p>}

        </article>
    )
}

export default FAQ