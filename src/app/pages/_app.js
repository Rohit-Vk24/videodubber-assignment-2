import React from "react";
import { MantineProvider } from "@mantine/core";
import "../globals.css"; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;