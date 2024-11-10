import { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import TopBar from "./components/TopBar";
import FilterList from "./components/FilterList";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HotelList from "./components/HotelList";

function App() {
  return (
    <>
      <TopBar />
      <Container>
        <Row>
          <Col lg={4}>
            <FilterList />
          </Col>
          <Col>
            <HotelList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
