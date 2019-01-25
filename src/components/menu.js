import React from 'react'
import { Link, navigate } from 'gatsby'
import { Container, Menu } from "semantic-ui-react"

export default class NavBar extends React.Component {

  render() {
    return (
      <Container fluid>
        <Menu inverted borderless stackable>
          <Menu.Item
            name='home'
            as={Link} to={"/"}
          />
          <Menu.Item
            name='about'
            as={Link} to={"/about"}
          />
          <Menu.Item
            name='projects'
            as={Link} to={"/projects"}
          />
          <Menu.Item
            name='contact'
            as={Link} to={"/contact"}
          />
        </Menu>
      </Container>
    )
  }
}
