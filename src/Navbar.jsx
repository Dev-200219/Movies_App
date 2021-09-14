import {Link} from 'react-router-dom'

let Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <div style={{height:"2rem", width:"2rem"}} className="img-container">
            <img style={{height:"100%"}} src="http://localhost:3001/icons/netflix_logo.svg" alt="" />
            </div>
          </Link>
          <button
            class="navbar-toggler"
            type="button"   
            data-bs-toggle="collapse"
            data-bs-target="/#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div style={{marginLeft:"100px"}} class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/customer">
                  Customers
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/rentals">
                  Rentals
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;