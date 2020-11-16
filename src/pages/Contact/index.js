import React from "react";
import classes from "./style.module.css";

const Contact = () => {
  return (
    <div className={classes.Contact}>
      <h1 className={classes.ContactH1}>Contact:</h1>
      <p>
        Feel free to contact me via my contact page on my main&nbsp;
        <a
          className={classes.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://shelbypalumbo.github.io/Shelby-Palumbo-React-Portfolio/"
        >
          website
        </a>
        !
      </p>

      <p>
        Or connect with me on{" "}
        <a
          className={classes.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/shelby-palumbo/"
        >
          linkedIn
        </a>
        .
      </p>
    </div>
  );
};

export default Contact;
