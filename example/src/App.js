import React, { useState } from 'react'
import { Spinner, Form, Col, Row, Container, Button } from "react-bootstrap"
import ReactFlexyLoader from 'react-flexy-loader'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-flexy-loader/dist/index.css'

const App = () => {
  const [show, handleShow] = useState(true)
  const [alpha, handleAlpha] = useState(0)
  const [showForMain, handleShowForMain] = useState(false)
  return <div>
    <Container className="mt-3">
      <Row className="justify-content-center">
        <h2>In main div</h2>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Check label="Handle Spinner show" type="checkbox" onChange={() => handleShowForMain(!showForMain)} id="spinnerShow1" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <h2>In a div</h2>

        <p>
          if you want to render loader in div you must to make parent element  "position:releative" after that the loader will cover the parent div. Other wise loader will cover first parent "position:releative" element
        </p>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Check label="Handle Spinner show" type="checkbox" onChange={() => handleShow(!show)} id="spinnerShow2"  checked={show}/>
            </Form.Group>

            <Form.Group>
              <label>handle alpha value {alpha}</label>
              <Form.Control label="Handle Spinner absolute" type="range" min={0} max={1} value={alpha} step={0.05} onChange={(e) => handleAlpha(Number(e.target.value))} id="spinnerAbsolute2" />
            </Form.Group>
          </Form></Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between">
          <div className="in-container">
            <Button className="m-4" variant="outline-primary">You can click me</Button>
            <ReactFlexyLoader show={show} alpha={alpha} />
          </div>
          <div className="in-container">
            <Button className="m-4" variant="outline-primary">You cannot click me</Button>
            <ReactFlexyLoader show={show} alpha={alpha} pointerEvents={false} position="bottom">
              <div className="text-center text-primary">
                <Spinner animation="grow" variant="primary" /> <br />
                <em>Bottom Spinner</em><br />
                <em>pointerEvents props control the pointer events</em>
              </div>
            </ReactFlexyLoader>
          </div>
          <div className="in-container">
            <ReactFlexyLoader show={show} alpha={alpha} position="top">
              <div className="text-center text-primary">
                <Spinner animation="border" variant="primary" /><br></br>
                <em>Top Spinner</em><br />
                <strong>Loading....</strong><br />
                <em>if you want as a spinner you can pass anything you want </em>
              </div>
            </ReactFlexyLoader>
          </div>
        </Col>
      </Row>
    </Container>
    <ReactFlexyLoader show={showForMain} />
  </div>
}

export default App
