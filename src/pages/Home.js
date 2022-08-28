import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { fetchLocalStorage,setLoaclStorage } from "../components/Header";
import proposals from "../Data/proposals";
import VoteCard from "../components/VoteCard";

const Home = () => {
  const [store, setStore] = useState([])
  useEffect(()=>{
    const str = fetchLocalStorage(proposals);
    setStore(str)
    console.log(str)
  },[])
  return (
    <Box>
      <Box sx={{ my: 2 }}>
        <Typography component="p">Ethereum Finance</Typography>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Proposals
        </Typography>
      </Box>
      <Grid item md={8}>
        <Grid container spacing={3}>
          {store
            ?.map((proposal, index) => (
              <Grid item key={index} md={12}>
                <VoteCard
                  title={proposal.title}
                  description={proposal.description}
                  proposalId={proposal.id}
                  address={proposal.address}
                />
              </Grid>
            ))
            .reverse()}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
