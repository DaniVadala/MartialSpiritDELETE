import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';




const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light navBarBackground navBarPadding">
      <img className='shopLogo' src="https://cdn.pixabay.com/photo/2014/04/02/10/58/karate-305102_1280.png" alt="" />
    <a className="navbar-brand" href="#">Martial Spirit</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact us</a>
        </li>
      </ul>
    </div>
    <div>
    <CartWidget/>
    </div>

  </nav>
    
    
    
  )
}

export default NavBar;
