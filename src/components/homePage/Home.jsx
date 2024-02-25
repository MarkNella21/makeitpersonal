import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
const Home = () => {

    return(
          <React.Fragment>
             <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Welcome to the site!</h1>
              <p className="col-md-8 fs-4">
                The button below should take you to the about us and give
                you a snapshot of where it all started!
              </p>
              <p>
                <Button className="btn btn-primary btn-lg">
                  About Us
                </Button>
              </p>
            </div>
          </div>
        </div>
        <CardGroup className="col">
            <Card>
              <h2>Recomendations</h2>
              <Card.Body>
                <Card.Text>
                This will be the top three recommendations and links to local business
                </Card.Text>
                <Button className="btn btn-secondary">
                  View details &raquo;
                </Button>
              </Card.Body>
            </Card>
            <Card>
              <h2>Store</h2>
              <Card.Body>
                <Card.Text>
                This will be for the products for sale or for order
                </Card.Text>
              <p>
                <Button className="btn btn-secondary">
                  View details &raquo;
                </Button>
              </p>
              </Card.Body>
            </Card>
            <Card>
              <h2>More Information</h2>
              <Card.Body>
                <Card.Text>
                This will be for requesting quotes or any information 
                of services and needs that will be filled with our skills
                </Card.Text>
              <p>
                <button className="btn btn-secondary">
                  View details &raquo;
                </button>
              </p>
              </Card.Body>
            </Card>
        </CardGroup>

          <hr />
      </main>
          </React.Fragment>
    )
    
}

export default Home;