
import Banner from '../../Components/Banner'
import FAQs from '../../Components/FAQs'
// import Footer from '../../Components/Footer'
import MainHeader from '../../Components/MainHeader'
import Programs from '../../Components/Programs'
import Testimonials from '../../Components/Testimonials'
import Values from '../../Components/Values'
import './Home.css'

const Home = () => {
  return (
    <>
    <MainHeader />
    <Programs />
    <Banner />
    <Values />
    <FAQs />
    <Testimonials />
    {/* <Footer /> */}
    
   

    </>
  )
}

export default Home