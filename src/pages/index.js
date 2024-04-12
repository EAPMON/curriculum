import React from "react";

import { Helmet } from "react-helmet"

const IndexPage = () => (
  <div className="flex flex-col justify-center items-center h-screen text-center">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Eric Pinto</title>
    </Helmet>
    <h1>
      ERIC <span className=" text-lime-300">PINTO</span>
      <br />
    </h1>
    <span className="quote">
      "I'm a <strong className="text-lime-300">Developer Full Stack</strong>."
    </span>
    <div className="centered">
      <p>Under Construction</p>
    </div>
  </div>
);

export default IndexPage;
