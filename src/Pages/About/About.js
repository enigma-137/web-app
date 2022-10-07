import Header from "../../Components/Header"
import HeaderImage from '../../images/header_bg_1.jpg'
import VisionImage from '../../images/pexels-pavel-danilyuk-8815234.jpg'
import StoryImages from '../../images/pexels-adrian-agpasa-11984866.jpg'
import MissionImage from '../../images/pexels-consoler-creative-11536521.jpg'
import './about.css'
const About = () => {
  return (
   <>
    <Header title="About Us" image={HeaderImage}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum rerum enim dolores. Laborum quas temporibus tempora fuga eum facilis?

    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImages} alt="noimage"/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias iste ducimus necessitatibus dolor cum, nisi quas hic laudantium itaque voluptatum, voluptates sapiente numquam unde.

          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium odit quam sequi neque debitis dolores. Corrupti, iure.
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto odit autem eaque vitae modi nobis.</p>
        </div>

      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
       
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit consequatur laborum, aspernatur quam consectetur esse fugit labore natus quod, earum impedit nihil beatae autem, soluta placeat nulla.

          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium odit quam sequi neque debitis dolores. Corrupti, iure.
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto odit autem eaque vitae modi nobis.</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="noimage"/>
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="noimage"/>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias iste ducimus necessitatibus dolor cum, nisi quas hic laudantium itaque voluptatum, voluptates sapiente numquam unde.

          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium odit quam sequi neque debitis dolores. Corrupti, iure.
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto odit autem eaque vitae modi nobis.</p>
        </div>

      </div>
    </section>
   </>
   
   
  )
}

export default About