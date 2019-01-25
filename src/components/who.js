import React from 'react';
import { Icon, Image, Grid, Header, Progress, Segment, Accordion } from "semantic-ui-react";
import { Link } from 'gatsby'

import myImage from "../images/family.jpg"

const Who = () => (
      <Grid columns={4} stackable relaxed="very">
        <Grid.Row>
          <Grid.Column centered="true" verticalAlign="middle">
            <Image circular src={ myImage } />
          </Grid.Column>
          <Grid.Column centered="true" verticalAlign="middle">
            <Header inverted size="huge"> My family and I. </Header>
            <Header inverted > I'm currently working for myself on great projects for my resume, while also building a full SaaS called Omnii.</Header>
            <Link to={"/contact"} style={{color: "#fe9b7f", fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif", fontSize: "25px"}}> Let's build the next big thing. </Link>
          </Grid.Column>
          <Grid.Column width={8}>
          <Segment inverted>
            <Progress style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}} percent={70} color="violet" size="medium" inverted progress> React </Progress>
            <Progress style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}} percent={80} color="violet" size="medium" inverted progress> Javascript </Progress>
            <Progress style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}} percent={50} color="violet" size="medium" inverted progress> Node.js </Progress>
            <Progress style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}} percent={60} color="violet" size="medium" inverted progress> Firebase </Progress>
            <Progress style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}} percent={35} color="violet" size="medium" inverted progress> MongoDB </Progress>
            <Progress style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}} percent={40} color="violet" size="medium" inverted progress> Go </Progress>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )

export default Who
