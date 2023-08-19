

import React from 'react'
import './Navbar.css'
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [search, setSearch] = React.useState('');
  // const handleLogout = ()=>{
  //   localStorage.removeItem("TOKEN");
  //   window.location.reload();
  // };

  return (

    
 
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light main mt-1">
  <div className="container-fluid ms-4">
    <Link className="navbar-brand" to="/"><img src="https://shop.activeitzone.com/public/uploads/all/CZOY12JMJOU8D73wMnx25x9eMXFGPdHgRdxi4zuh.png" alt="" /></Link>
    <button className="navbar-toggler bb2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">


    <form className="d-flex mx-auto">
        <input className="form-control me-2 button bb" type="search" placeholder="Search" aria-label="Search" />
        {/* <button className="btn button" type="submit">Search</button> */}
      </form>

      <ul className="navbar-nav me-2 mb-2 mb-lg-0 bb1">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register">Signup</Link>
        </li>

        {/* <li className="nav-item">
          <Link className="nav-link" onClick={handleLogout} to="">Logout</Link>
        </li> */}

        <li className="nav-item logo">
          <Link className="nav-link" to="/cart"><ShoppingCartOutlined className='iconn'/></Link>
        </li>
      </ul>


      
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
