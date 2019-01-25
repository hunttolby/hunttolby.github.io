import React from 'react'
import { navigate } from 'gatsby'
import Background from "../components/background.js"
import { Container, Header, Button } from "semantic-ui-react"
import "../css/index.css"

const IndexPage = () => (
  <div>
    <div>
      <Background/>
      </div>
      <Container textAlign="center" fluid style={{
        height: "100%",
        lineHeight: "700px",
        textAlign: "center",
      }}>
      <div style={{
        display: "inline-block",
        verticalAlign: "middle",
        lineHeight: "normal",
      }}>
        <Header size="huge"  style={{ color: "white", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "4em",}}>
        Hello, I'm
        <span style={{color:"#fe9b7f"}}> Tolby Hunt</span>.
        <br/>
        I'm a full-stack web developer.
        </Header>
        <Button onClick={()=> navigate(`/about`, { state: { activeItem: `about` }})} inverted> View my portfolio </Button>
      </div>


    </Container>
    </div>
)

export default IndexPage
