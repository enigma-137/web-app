import React from 'react'
import BackgroundVideo from '../../images/Holy Week - 23879.mp4'
import './video.css'

const Video = () => {
  return (
    <>
     <video autoPlay muted loop className='video' >
        <source src={BackgroundVideo} type='video/mp4' />
    </video>
    <div className="video__content">
    <h1>Our Guide</h1>
    <h3>You get faith by studying the Word. Study that Word until something 
        in you "knows that you know" and that you do not just hope that you know.
  <br />

  <br />
<b><em>Tech Baby❤💜</em></b>
</h3>
    </div>
   
    </>
   
  )
}

export default Video