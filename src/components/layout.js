import React from "react"
import Header from "./header"
// import Footer from "./footer"

import "../styles/style.css"
import { Container, Row, Col } from "reactstrap"

const Layout = props => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xs="3">
          <Header />
        </Col>
        <Col style={{marginLeft: "18rem"}} xs="9">{props.children}</Col>
        {/* <Col>
          <Footer />
        </Col> */}
      </Row>
    </Container>
  )
}

export default Layout
