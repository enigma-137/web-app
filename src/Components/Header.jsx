 
const Header = ({title, image, children}) => {
  return (
   <header className='header'>
  <div className="header_container">
    <div className="header__container-bg">
      <img src={image} alt="background" />
    </div>
    <div className="header_content">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  </div>
   </header>
  )
}

export default Header