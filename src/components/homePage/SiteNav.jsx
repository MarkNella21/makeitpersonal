import React from "react";
import Logo from "../../NDLogoCombs.jpg";
import { Link } from "react-router-dom";

function SiteNav() {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Make It Personal"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <button className="nav-link px-2 text-white link-button">
                  Home
                </button>
              </li>
              <li className="nav-item">
                <Link
                  to="/eventplanning"
                  className="nav-link px-2 text-white link-button"
                >
                  Events
                </Link>
              </li>
            </ul>
            <div className="text-end">
              <a
                href="/"
                className="align-items-center mb-2 me-2 mb-lg-0 text-white text-decoration-none"
              >
                Unknow User
              </a>
              <button type="button" className="btn btn-outline-light me-2">
                User Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default SiteNav;

// import React from "react";
// import logo from "../../NDLogo.jpg";

// const SiteNav = () => {

//     return(
//         <React.Fragment>
//             <div className="SiteNav">

//             </div>
//             <nav 
//             aria-label="Fourth navbar example"
//             className="navbar navbar-expand=md navbar-dark bg-dark"
//             >
//                 <div className="container">
//                     <a 
//                     className="navbar-brand"
//                     href="/">
//                         <img 
//                         src={logo} 
//                         alt="NellaBrand"
//                         width="250"
//                         height="130"
//                         className="d-inline-block align-top"
//                         />
//                     </a>
//                 </div>

//             </nav>
//         </React.Fragment>
//     )
// }

// export default SiteNav;
