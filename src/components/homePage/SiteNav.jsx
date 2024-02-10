import React from "react";
import logo from "../../NDLogo.jpg";

const SiteNav = () => {

    return(
        <React.Fragment>
            <nav 
            aria-label="Fourth navbar example"
            className="navbar navbar-expand=md navbar-dark bg-dark"
            >
                <div className="container">
                    <a 
                    className="navbar-brand"
                    href="/">
                        <img 
                        src={logo} 
                        alt="NellaBrand"
                        width="250"
                        height="130"
                        className="d-inline-block align-top"
                        />
                    </a>
                </div>

            </nav>
        </React.Fragment>
    )
}

export default SiteNav;