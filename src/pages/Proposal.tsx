import { ArrowBack } from "@mui/icons-material";
import {
  Typography,
  Box,
  Button,
  IconButton,
  Grid,
  Card,
  Stack,
  CardHeader,
  CardContent,
  Avatar,
  Input,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, Params, useParams } from "react-router-dom";
import proposals from "../Data/proposals";
import { fetchLocalStorage } from "../components/Header";
// @ts-ignore
import { useDefaultContext } from "../context.tsx";
export type data = {
  id: number;
  title: string;
  description: string;
  address: string;
};
const Proposal = (props) => {
  const navigate = useNavigate();
  const { proposalId } = useParams();
  const { Api } = useDefaultContext();
  const [store, setStore] = useState({} as data);
  const [active, setActive] = useState(0);
  const [amount, setAmount] = useState(0);
  const {isConnected} = useDefaultContext()
  const handleVote = async () => {
   try {
     if (amount < 1) return alert("Delegated amount must be greater than zero");
     if (!isConnected){
      return alert("Please connect and try again")
     } alert("voting....");
     await Api.action(amount, active);
    //  alert("Voted successfully....");

   } catch (error) {
    alert("An error occured, check the console for more")
   }
  };
  useEffect(() => {
    const str: data[] = fetchLocalStorage();
    const storeData = str.filter(({ id }) => id == Number(proposalId));
    setStore(storeData[0]);

    console.log({ proposalId });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <Box>
          <Box sx={{ mb: 3 }}>
            <IconButton onClick={() => navigate("/")}>
              <ArrowBack />
            </IconButton>
          </Box>
          <Stack spacing={2}>
            <Typography variant="h2">{store?.title}</Typography>
            <Box>
              <Button variant="contained" color="success">
                Active
              </Button>
            </Box>
            <Typography component="p">{store?.description}</Typography>
          </Stack>
          <Box sx={{ my: 5 }}>
            <Card>
              <CardHeader title="Cast your vote" />
              <CardContent>
                <Stack spacing={1}>
                  <Button
                    variant={`${!(active == 1) ? "text" : "outlined"}`}
                    onClick={() => setActive(1)}
                  >
                    Yes
                  </Button>
                  <Button
                    variant={`${!(active == 2) ? "text" : "outlined"}`}
                    onClick={() => setActive(2)}
                  >
                    No
                  </Button>
                  <Input
                    type="number"
                    onChange={(e) => setAmount(Number(e.target.value))}
                    placeholder="Enter Amount to Delegate to vote"
                  />
                  <Button
                    variant="contained"
                    onClick={() => handleVote()}
                    disabled={false}
                  >
                    Vote
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ my: 5 }}>
            <Card>
              <CardHeader title="votes" />
              <CardContent>
                <Stack spacing={1}>
                  {Array(5)
                    .fill("")
                    .map((_, index) => (
                      <Box
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        key={index}
                      >
                        <Avatar />
                        <Typography component="p">0x8Dd0...4Ea7</Typography>
                        <Typography component="p">Yes</Typography>
                        <Typography component="p">10.8 Eth</Typography>
                      </Box>
                    ))}
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Card sx={{ position: "sticky", top: "20px" }}>
          <CardHeader title="Information" />
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Proposal;
