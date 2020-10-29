import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import classes from "./style.module.css";

function Algorithm(props) {
  return (
    <Card className={classes.margin}>
      <CardBody>
        <CardTitle>
          <h1 className={classes.title}>{props.title}</h1>
        </CardTitle>
        <CardSubtitle>
          <h3 className={classes.title}>{props.subtitle}</h3>
        </CardSubtitle>
        <CardText className={classes.chalkboard}>
          <p className={classes.algorithm}>{props.algorithm}</p>
          <p className={classes.testcase}>
            <i class="fas fa-asterisk"></i>
            <br />
            {props.testcase}
            <br />
            <i class="fas fa-asterisk"></i>
          </p>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default Algorithm;
