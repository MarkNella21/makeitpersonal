import React from "react";
import "../../css/eventplanning.css";
import { Card, Container, Row } from "react-bootstrap";

const EventPlanning = () => {

    return(
        <React.Fragment>
            <Container>
                <Row>
                    <Card.Header>
                        <Card.Img>
                            <div>
                                <image className="thumbnail" href="https://t.ly/nO0ec" alt="404 photo of event holder not found"></image>
                            </div>
                        </Card.Img>
                    </Card.Header>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default EventPlanning;