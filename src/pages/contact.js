import React from 'react'
import { Link } from 'gatsby'
import { Container, Header, Segment, Button, Menu, Input, Divider, Form, Message } from "semantic-ui-react"
import "../css/index.css"
import Background from "../components/background.js"
import NavBar from "../components/menu.js"
//import myResume from "documents/Tolby Hunt Resume.pdf"

const ContactPage = () => (
  <div>
    <Background/>
    <NavBar/>
    <Divider hidden />
    <Container fluid textAlign="center">
      <Header inverted size="huge" style={{fontSize:"55px"}}>
        Contact
      </Header>

      <Segment fluid inverted size="small" style={{height: "50%", marginTop: "30px"}}>
        <Header inverted size="medium">
          If you would just like my resume, please <a style={{color: "#fe9b7f"}} /*href={ myResume }*/ download> click here</a>.
        </Header>
        <Divider hidden/>
        <Container text textAlign="left">
          <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" widths="equal" inverted style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}>
            <Form.Group>
            <input type="hidden" name="bot-field" />
              <Form.Input label='Name' placeholder='Name' />
              <Form.Input label='Email' placeholder='joe@schmoe.com' />
            </Form.Group>
              <Form.TextArea label='Message' placeholder='joe@schmoe.com' />
              <Message success header='Form Completed' content="I will respond to you soon!" />
              <Button fluid inverted color="violet">Submit</Button>
          </Form>
        </Container>
      </Segment>
    </Container>
  </div>
)

export default ContactPage
