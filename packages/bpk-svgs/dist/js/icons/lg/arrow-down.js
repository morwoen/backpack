import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19.7 10.3L12 17.4l-7.7-7.1c-.6-.6-.2-1.7.7-1.7h14c.9 0 1.3 1.1.7 1.7z" /></svg>);