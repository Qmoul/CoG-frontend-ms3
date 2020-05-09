import React, { Fragment } from "react";
import spinner from "./spinner.gif";
import Center from "react-center";

export default () => (
  <Fragment>
    <Center>
      <img
        src={spinner}
        stlye={{ width: "20px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </Center>
  </Fragment>
);
