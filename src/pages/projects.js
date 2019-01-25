import React from 'react'
import { Link } from 'gatsby'
import { Container, Header, Segment, Button, Menu, Input, Divider } from "semantic-ui-react"
import "../css/index.css"
import Background from "../components/background.js"
import NavBar from "../components/menu.js"

const ProjectsPage = () => (
  <div>
    <Background/>
    <NavBar/>
    <Divider hidden />
    <Container fluid textAlign="center">
      <Header inverted size="huge" style={{fontSize:"55px"}}>
        Projects
      </Header>
    </Container>
  </div>
)

export default ProjectsPage
