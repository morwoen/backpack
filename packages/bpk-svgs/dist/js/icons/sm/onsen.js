import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M21 16.6c-.2 1-.7 1.9-1.5 2.5-.7.6-1.5 1.1-2.3 1.4-3.3 1.3-7 1.3-10.3 0-.8-.3-1.6-.8-2.3-1.4-.8-.6-1.3-1.5-1.5-2.5-.1-1 .2-2.1.9-2.8.6-.6 1.3-1 2.1-1.3v1.2c-.9.5-1.4 1.5-1.2 2.6.6 1.2 1.6 2 2.9 2.3 1.4.5 2.9.7 4.3.7 1.5 0 2.9-.2 4.3-.7 1.3-.3 2.3-1.1 2.9-2.3.1-1-.4-2-1.2-2.6v-1.2c.8.3 1.5.7 2.1 1.3.6.8.9 1.8.8 2.8zm-9-5.1c1.4 0 2.5-1.1 2.5-2.5S13.4 6.5 12 6.5 9.5 7.6 9.5 9s1.1 2.5 2.5 2.5m4.7-5.8c0-.1 0-.1 0 0v-1c0-.1-.1-.1-.1-.1h-.1c-1.2 1-1.3 1.9-.2 3.6.4.6 1.3 2.1.2 3-.1.4-.1.7 0 1.1 0 0 0 .1.1.1h.1c1.6-1.1 1.7-2.6.5-4.6-.7-1.2-.9-1.7-.5-2.1m-2.8 6.8c1.3 0 2.3 1 2.3 2.3v.3l-.3 2c-1.3.3-2.6.4-3.8.4-1.3 0-2.6-.1-3.9-.4l-.3-2c-.1-1.3.8-2.4 2.1-2.6h3.9m5.8-8.8c0-.1 0-.1 0 0v-1c0-.1-.1-.1-.1-.1h-.1c-1.2 1-1.3 1.9-.2 3.6.4.6 1.3 2.1.2 3-.1.4-.1.7 0 1.1 0 0 0 .1.1.1h.1c1.6-1.1 1.7-2.6.5-4.6-.7-1.2-.9-1.7-.5-2.1" /></svg>);