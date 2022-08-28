import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { ArrowBack, Cancel } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useDefaultContext } from "../context.tsx";
import { fetchLocalStorage, setLoaclStorage } from "../components/Header";

const NewProposal = () => {
  const navigate = useNavigate();
  const { isConnected, Api } = useDefaultContext();
  const [choiceNum, setChoiceNum] = React.useState(2);
  const [proposalForm, setProposalForm] = React.useState({
    id: "",
    title: "",
    description: "",
    choices: [],
    startDate: "",
    endDate: "",
    address:""
  });

  React.useEffect(() => {
    console.log(proposalForm);
    // console.log({api:Api.acc})
  }, [proposalForm]);
  const handleChange = (e) => {
    setProposalForm({ ...proposalForm, [e.target.name]: e.target.value });
  };
  const handleChoiceChange = (e, index) => {
    let arr = proposalForm.choices;
    arr[index] = e.target.value;
    setProposalForm({ ...proposalForm, choices: arr });
  };

  const handleChoice = (e) => {
    if (choiceNum < 5) {
      setChoiceNum((prev) => (prev += 1));
    }
  };

  const handleSubmit = async () => {
    if (!isConnected) return alert("Connect your wallet first");
    alert("Sign transactions in your wallet to confirm proposal");
    try {
      await Api.Proposer1(1);
      const str = fetchLocalStorage();
      setLoaclStorage([
        ...str,
        { ...proposalForm, id: str.length, address: Api.acc.networkAccount.addr },
      ]);
      alert("Successfully created proposal");
    } catch (error) {
      try {
        await Api.Proposer2(2);
        const str = fetchLocalStorage();
        setLoaclStorage([...str, { ...proposalForm, id: str.length }]);
        alert("Successfully created proposal");
      } catch (error) {
      console.log(error);

        alert("An error occured");
      }
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item md={8} xs={12}>
        <Box>
          <Box sx={{ my: 3 }}>
            <IconButton onClick={() => navigate("/")}>
              <ArrowBack />
            </IconButton>
          </Box>
          <Box>
            <Stack spacing={2}>
              <TextField
                name="title"
                placeholder="Ask a question..."
                sx={{ fontSize: "20px", fontWeight: 800 }}
                onChange={handleChange}
                value={proposalForm.value}
              />
              <TextField
                placeholder="Tell me more about your proposal"
                name="description"
                value={proposalForm.description}
                onChange={handleChange}
              />
            </Stack>
            <Card sx={{ my: 3 }}>
              <CardHeader title="Choices" />
              <CardContent>
                <Stack spacing={2}>
                  {Array(choiceNum)
                    .fill()
                    .map((_, index) => (
                      <FormControl variant="outlined">
                        <OutlinedInput
                          onChange={(e) => handleChoiceChange(e, index)}
                          placeholder={index + 1}
                          endAdornment={
                            <IconButton
                              onClick={() =>
                                setChoiceNum((prev) => (prev -= 1))
                              }
                            >
                              <Cancel />
                            </IconButton>
                          }
                        />
                      </FormControl>
                      // <TextField
                      //   placeholder={index + 1}
                      //   key={index}
                      //   endAdornment={<InputAdornment>kg</InputAdornment>}
                      // />
                    ))}
                  <Button variant="contained" onClick={handleChoice}>
                    Add Choice
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card>
          <CardHeader title="Actions" />
          <CardContent>
            <Stack spacing={2}>
              <DateTimePicker
                label="Select Start Date"
                renderInput={(params) => <TextField {...params} />}
              />
              <DateTimePicker
                label="Select End Date"
                renderInput={(params) => <TextField {...params} />}
              />
              <Button
                variant="contained"
                onClick={() => handleSubmit()}
                disabled={!proposalForm.title || !proposalForm.description}
              >
                Publish
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NewProposal;
