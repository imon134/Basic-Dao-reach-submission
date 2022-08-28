import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  loadStdlib,
  ALGO_WalletConnect as WalletConnect,
} from "@reach-sh/stdlib";
// @ts-ignore
import * as backend from "./build/index.main.mjs";

const ctcInfo = { _hex: "0x065860b1", _isBigNumber: true };

// @ts-ignore
const stdlib = loadStdlib("ALGO");

stdlib.setWalletFallback(
  stdlib.walletFallback({
    providerEnv: "TestNet",
    WalletConnect,
  })
);
export type modalType = "launch" | "message" | "Subscribe" | "none";
export const useDefaultContext = () => useContext(AppContext);

const AppContext = React.createContext(
  {} as {
    state: any;
    setState: React.Dispatch<React.SetStateAction<{}>>;
    wallet: any;
    setWallet: React.Dispatch<React.SetStateAction<{}>>;

    createAsyncTimeout: (
      seconds: number,
      executable?: () => any
    ) => Promise<void>;

    isConnected: boolean;
    setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
    setContractInfo: React.Dispatch<React.SetStateAction<string>>;
    Api: {
      Proposer1: (num: number) => Promise<any>;
      Proposer2: (num: number) => Promise<any>;
      getBalance: () => Promise<number | any>;
      displayBalance: () => Promise<void>;
      action: (p: number, v: any) => Promise<void>;
      acc: any;
    };
    connectWallet: () => Promise<void>;
    DisconnectWallet: () => void;
  }
);
let i = 0;

export const ReactProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState(false);
  const [contractInfo, setContractInfo] = useState("" as string);
  const [state, setState] = useState({});
  const [wallet, setWallet] = useState({} as any);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Hello" as any);
  const [view, setView] = useState<modalType>("none");
  const [isOpen, setOpen] = useState(false);
  const [Api, setApi] = useState(
    {} as {
      Proposer1: (somn: number) => Promise<any>;
      Proposer2: (funds: number) => Promise<any>;
      getBalance: () => Promise<number | any>;
      displayBalance: () => Promise<void>;
      action: (p: number, v: any) => Promise<void>;
      acc: any;
    }
  );

  useEffect(() => {
const ctc = localStorage.getItem("contractInfo")
// @ts-ignore
    !!ctc ? setContractInfo(JSON.parse(ctc)) : setContractInfo(ctcInfo);
  }, []);

  const connectWallet = async () => {
    try {
      const acct = await PROPOSER();
      setWallet(acct.acc);
      setApi(acct);
      setIsConnected(true);
      console.log(acct);
      return acct.acc;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const createAsyncTimeout = async (seconds: number) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(null);
      }, seconds * 1000)
    );
  };

  const DisconnectWallet = async () => {
    window.localStorage.removeItem("walletconnect");
    setIsConnected(false);
  };

  const PROPOSER = async () => {
    const acc = await stdlib.getDefaultAccount();
    const ctc = acc.contract(
      backend,
      // @ts-ignore
      stdlib.bigNumberToNumber(contractInfo)
    );

    const Proposer1 = async (num: number) => {
      try {
        const res = await ctc.apis.Proposer1.idea(num);
        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const Proposer2 = async (num: number) => {
      try {
        const res = await ctc.apis.Proposer2.idea(num);
        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const getBalance = async () => {
      return await stdlib.balanceOf(acc);
    };

    const displayBalance = async () => {
      const bal = await getBalance();
      console.log(`s balance: ${stdlib.formatCurrency(bal, 4)}`);
    };
    const action = async (p: number, v: any) => {
      try {
        //const vote = parseInt(v)
        const pay = stdlib.parseCurrency(p);
        await ctc.apis.Voters.action(pay, parseInt(v));
      } catch (error) {
        console.log(error);
      }
    };
    return {
      action,
      Proposer1,
      Proposer2,
      getBalance,
      displayBalance,
      acc,
    };
  };
  // const deploy = async (acc: any) => {
  //   const ctcAdmin =
  //     (await acc?.contract(backend)) ?? (await wallet?.contract(backend));
  //   Promise.all([
  //     ctcAdmin.p.Admin({
  //       MaxFunds: async () => {
  //         const funds = 1
  //         return stdlib.parseCurrency(funds);
  //       },
  //       deadline_proposers: async () => {
  //         const deadline_proposers = "1000"
  //         return parseInt(deadline_proposers);
  //       },
  //       deadline_voters: async () => {
  //         const deadline_voters = "1000"
  //         return parseInt(deadline_voters);
  //       },
  //     }),
  //   ]);
  //   await createAsyncTimeout(90);
  //   setContractInfo(await ctcAdmin.getInfo());
  //   console.log(await ctcAdmin.getInfo());
  // };

  // React.useEffect(() => {
  //   (async () => {
  //     if (i < 1) {
  //       const acct = await connectWallet();

  //       await deploy(acct);
  //       i++;
  //     }
  //   })();
  // }, []);
  return (
    <AppContext.Provider
      value={{
        Api,
        DisconnectWallet,
        createAsyncTimeout,
        connectWallet,
        state,
        setState,
        wallet,
        setWallet,
        isConnected,
        setContractInfo, setIsConnected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
