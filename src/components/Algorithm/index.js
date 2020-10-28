import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

function Algorithm(props) {
  return (
    <Card>
      {/* <CardImg
        top
        width="100%"
        src="/assets/318x180.svg"
        alt="Card image cap"
      /> */}
      <CardBody>
        <CardTitle>
          <h1>{props.title}</h1>
        </CardTitle>
        <CardSubtitle>
          <h3>{props.subtitle}</h3>
        </CardSubtitle>
        <CardText>
          <pre>{props.algorithm}</pre>
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}

export default Algorithm;
