import { Box } from "@chakra-ui/layout";
import React from "react";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Box height="calc(100vh - 64px)" overflowY="scroll">
        {children}
      </Box>
    </>
  );
}
