import React from 'react'
import { Link } from 'gatsby'
import { Container, Header, Segment, Button, Menu, Divider, Card, Icon, Reveal } from "semantic-ui-react"
import "../css/index.css"
import Background from "../components/background.js"
import NavBar from "../components/menu.js"
import AboutCards from "../components/aboutCards.js"
import Who from "../components/who.js"

const AboutPage = () => (
  <div>
    <Background/>
    <NavBar/>
    <Divider hidden />
    <Container fluid textAlign="center">
      <Header inverted size="huge" style={{fontSize:"55px"}}>
        About
      </Header>
      <AboutCards/>
        <Reveal animated="move down">
          <Reveal.Content visible style={{width: "100%"}}>
            <Segment fluid inverted style={{height: "50%", marginTop: "30px"}}>
                <Header size="huge" style={{fontSize:"55px"}}>
                  Who Am I?
                </Header>
              <Divider hidden/>
                <Header size="huge" style={{fontSize:"30px"}}>
                I'm a hustler.
                I am always learning and creating new innovating things.
                I have always had a knack for solving problems.
                I have been working on a full SaaS CRM and expanding my knowledge in many technologies has been incredible.
                </Header>
              <Divider hidden/>
                <Header size="huge" style={{fontSize:"30px"}}>
                I have experience working on front end and full stack with the MERN stack.
                I absolutely love working with React and other similar frameworks.
                </Header>
              <Divider hidden/>
                <Header size="huge" style={{fontSize:"55px", color: "#fe9b7f"}}>
                 Hover to see more.
                </Header>
            </Segment>
          </Reveal.Content>
          <Reveal.Content hidden style={{width: "100%"}}>
            <Segment fluid inverted style={{height: "50%", marginTop: "30px"}}>
              <Who />
            </Segment>
          </Reveal.Content>
        </Reveal>
    </Container>

  </div>
)

export default AboutPage
