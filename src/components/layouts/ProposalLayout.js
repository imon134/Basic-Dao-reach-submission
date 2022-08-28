import MainLayout from "./MainLayout";
import React from "react";
import { Grid, Box, List, ListItemButton, ListItemText } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const ProposalLayout = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Box
            sx={{
              width: "100%",
              bgColor: "background.paper",
            }}
          >
            <List component="nav">
              <ListItemButton component={Link} to="/">
                <ListItemText primary="Proposals" />
              </ListItemButton>
              <ListItemButton component={Link} to="proposal">
                <ListItemText primary="New Proposal" />
              </ListItemButton>
            </List>
          </Box>
        </Grid>
        <Grid item md={8} xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default ProposalLayout;
