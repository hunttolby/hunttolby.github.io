import React from 'react';
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from 'gatsby'
const AboutCards = () => (

    <Card.Group centered stackable>
      <Card color="violet" raised style={{width: "20%", margin: "15px", fontSize: "18px"}}>
        <Image><Icon.Group style={{padding: "15px"}}><Icon name="circle outline" fitted inverted color="violet" size="huge"/><Icon name="fighter jet" fitted color="black" size="big"/></Icon.Group></Image>
        <Card.Content
          header={"Quick"}
          description={"Quick loading times with lag free interactions."}
        />
      </Card>
      <Card color="violet" raised style={{width: "20%", margin: "15px", fontSize: "18px"}}>
      <Image><Icon.Group style={{padding: "15px"}}><Icon name="circle outline" fitted inverted color="violet" size="huge"/><Icon name="magic" fitted color="black" size="big"/></Icon.Group></Image>
        <Card.Content
          header={"Dynamic"}
          description={"Being static is not always necessary. I love bringing pages to life."}
        />
      </Card>
      <Card color="violet" raised style={{width: "20%", margin: "15px", fontSize: "18px"}}>
      <Image> <Icon.Group style={{padding: "15px"}}><Icon name="circle outline" fitted inverted color="violet" size="huge"/><Icon name="sliders horizontal" fitted color="black" size="big"/></Icon.Group></Image>
        <Card.Content
          header={"Modern"}
          description={"Creating a simple and easy to use interface."}
        />
      </Card>
    </Card.Group>
)

export default AboutCards;
