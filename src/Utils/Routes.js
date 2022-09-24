import React from "react";
import { BrowserRouter } from "react-router-dom";

function Routes({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default Routes;
