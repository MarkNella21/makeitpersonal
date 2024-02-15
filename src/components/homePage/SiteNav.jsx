import React from "react";
import Logo from "../../NDLogoCombs.jpg";

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
                <button className="nav-link px-2 text-white link-button">
                  Friends
                </button>
              </li>
              <li className="nav-item">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Jobs
                </button>
              </li>
              <li className="nav-item">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Tech Companies
                </button>
              </li>
              <li className="nav-item">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Events
                </button>
              </li>
              <li className="nav-item">
                <button
                  href="#"
                  className="nav-link px-2 text-white link-button"
                >
                  Test and Ajax Call
                </button>
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
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Welcome to the site!</h1>
              <p className="col-md-8 fs-4">
                The button below should make an ajax call when clicked. Look at
                your task details for more infomation about the specifics.
              </p>
              <p>
                <button className="btn btn-primary btn-lg">
                  Make an Ajax Call on Click
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Recomendations</h2>
              <p>
                This will be the top three recommendations and links to local business
              </p>
              <p>
                <button className="btn btn-secondary">
                  View details &raquo;
                </button>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Store</h2>
              <p>
                This will be for the products for sale or for order
              </p>
              <p>
                <button className="btn btn-secondary">
                  View details &raquo;
                </button>
              </p>
            </div>
            <div className="col-md-4">
              <h2>More Information</h2>
              <p>
                This will be for requesting quotes or any information 
                of services and needs that will be filled with our skills
              </p>
              <p>
                <button className="btn btn-secondary">
                  View details &raquo;
                </button>
              </p>
            </div>
          </div>

          <hr />
        </div>
      </main>
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
