import React  from 'react'
import './menu.css'
import { Link } from "react-router-dom";

const Menu = () => {

    // const [sticky, setSticky] = useState(false);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     setSticky(window.scrollY > 200);
    //     console.log(window.scrollY);
    //   };
    //   window.addEventListener("scroll", handleScroll);
    //   return () => window.removeEventListener("scroll", handleScroll);
    // });

    return (
        <nav >
        <div className='menu'>
            <ul>
         <li><Link to= "/">Home</Link></li>
         <li><Link to = "/products">Products</Link></li>
         <li><Link to = "/blog">Testimonials</Link></li>
         <li><Link to = "/about">About</Link></li>
         <li><Link to = "/contact">Contact</Link></li>
         <li><Link to = "/predict">Predict</Link></li>
   
      </ul>
        </div>
        </nav>
    )
}

export default Menu

// import React from 'react'
// import './menu.css'

// const Menu = () => {
//     return (
//         <div>
           
// <nav class="navbar navbar-expand-sm navbar-light bg-light na1">
//     <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
       
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse text-center" id="navbarsExample11">
//             <ul class="navbar-nav">
//                 <li class="nav-item active">
//                     <a class="nav-link" href="#">Home</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Products</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Blog</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">About</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Contact</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>
//         </div>
//     )
// }

// export default Menu
