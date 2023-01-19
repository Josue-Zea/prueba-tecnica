import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CardF } from "../../Components/CardF";

const Dashboard = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        loadData();
    });

    const loadData = () => {
        setCards( JSON.parse(localStorage.getItem("cards") || [] ));
    };

    return (
        <Container>
            <Row>
                <Col lg={4} className="mt-4">
                    {
                        cards.map( ( card, i) => {
                            return (
                                <CardF key={i} card={card}/>
                            )
                        })  
                    }
                </Col>
            </Row>
        </Container>);
};

export default Dashboard;