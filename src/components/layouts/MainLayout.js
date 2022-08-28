import React from "react";
import { Outlet } from "react-router-dom";
import { Box, styled, Container } from "@mui/material";

import Header from "../Header";

const Main = styled(Box)(() => ({
  minHeight: "70vh",
  marginTop: "50px",
}));

const MainLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Main>
        <Container maxWidth="lg">{!children ? <Outlet /> : children}</Container>
      </Main>
    </Box>
  );
};

export default MainLayout;
