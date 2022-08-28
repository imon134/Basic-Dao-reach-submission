import React from "react";
import * as backend from "../build/index.main.mjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { loadStdlib } from "@reach-sh/stdlib";
import { useDefaultContext } from "../context.tsx";

const stdlib = loadStdlib("ALGO");
export function fetchLocalStorage() {
  const str = window?.localStorage?.getItem("proposals") ?? JSON.stringify([]);

  const store = JSON.parse(str);
  return store;
}
export function setLoaclStorage(str = []) {
  // const storrageItem = str.length <= 0 ? str : fetchLocalStorage();
  window.localStorage.setItem("proposals", JSON.stringify(str));
}
const Header = () => {
  // const {  } = useDefaultContext();
    const { wallet,isConnected, DisconnectWallet, createAsyncTimeout, setContractInfo, connectWallet } =
      useDefaultContext();
    const deploy = async (acc) => {
      try {
        const ctcAdmin =
          (await acc?.contract(backend)) ?? (await wallet?.contract(backend));
        Promise.all([
          ctcAdmin.p.Admin({
            MaxFunds: async () => {
              const funds = 1;
              return stdlib.parseCurrency(funds);
            },
            deadline_proposers: async () => {
              const deadline_proposers = "1000";
              return parseInt(deadline_proposers);
            },
            deadline_voters: async () => {
              const deadline_voters = "1000";
              return parseInt(deadline_voters);
            },
          }),
        ]);
        await createAsyncTimeout(90);
        const info = await ctcAdmin.getInfo();
        setContractInfo(info);
        localStorage.setItem("contractInfo", JSON.stringify(info));
        console.log(info);
      } catch (error) {
        console.log({ error });
      }
    };

    async function handleDeploy() {
      const acct = await connectWallet();
      await deploy(acct)
    }
  async function handleClick() {
    try {
      !isConnected ? await connectWallet() : DisconnectWallet();
    } catch (error) {
      console.log(error);
      alert("an error occured");
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5">Reach DAO</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeploy()}
            >
              Deploy
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleClick()}
            >
              {!isConnected ? "Connect Wallet" : "Disconnect"}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
