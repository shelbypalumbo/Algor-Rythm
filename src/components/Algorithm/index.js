import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import classes from "./style.module.css";

function Algorithm(props) {
  return (
    <Card className={classes.margin}>
      <CardBody>
        <CardTitle>
          <h1 className={classes.title}>{props.title}</h1>
        </CardTitle>
        <CardSubtitle>
          <h3 className={classes.sub_title}>{props.subtitle}</h3>
        </CardSubtitle>
        <div className={classes.chalkboard}>
          <p className={classes.algorithm}>{props.algorithm}</p>
          <p className={classes.testcase}>
            <i className="fas fa-asterisk"></i>
            <br />
            {props.testcase}
            <br />
            <i className="fas fa-asterisk"></i>
            <br />
            {/* Allows children/additional elements/components inbetween the main component opening and closing tags */}
            {props.children}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default Algorithm;
