import React from "react";
import App from "../Components/App";
import useTitle from "@4leaf.ysh/use-title";

const Root = () => {
  useTitle("Movie Like");
  return <App />;
};

export default Root;
