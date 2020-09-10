import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';

import Layout from "../components/layout"

const Index = () => {
  return (
    <div>
      <Layout>
      <h2>Home page</h2>
      <h4>I'm Ibas, a teacher and a Gatsby.js developer</h4>
      <Button color="success">Hire me</Button>
      </Layout>
    </div>
  )
}

export default Index