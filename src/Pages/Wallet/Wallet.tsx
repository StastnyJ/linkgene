import React, { useEffect, useState } from "react";
import { Avatar, Button, Container, Table, TableBody, TableCell, TableRow, Typography, useTheme } from "@mui/material";
import { useMetaMask } from "metamask-react";
import { ethers } from "ethers";
import { useLayout } from "../../Layout/LayoutContext";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { RightCell } from "../../Components/Styles/StyledComponents";
import { round } from "../../Utils/Common";

export default function () {
  const [ethBalance, setEthBalance] = useState(0.0);

  const { status, account, chainId, ethereum, connect } = useMetaMask();
  const layout = useLayout();

  const theme = useTheme();

  useEffect(() => {
    status === "connected" &&
      ethereum &&
      ethereum
        .request({ method: "eth_getBalance", params: [account, "latest"] })
        .then((res: any) => setEthBalance(parseFloat(ethers.utils.formatEther(res))))
        .catch(() => layout.error("Error while loading ETH Balance"));
    //eslint-disable-next-line
  }, [status]);

  const LGPaper = styled.div({
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });
  const LGAvatar = styled(Avatar)({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  });

  const shortAddress = account?.substring(0, 7) + "..." + account?.substring(account.length - 5, account.length);

  //   const disconnectWallet = () => ethereum.close();

  return (
    <Container maxWidth="sm">
      <LGPaper>
        <LGAvatar>
          <FontAwesomeIcon icon={faWallet} />
        </LGAvatar>
        <Typography component="h1" variant="h5">
          My Wallet
        </Typography>
        {status === "unavailable" ? (
          <>
            <Typography style={{ marginTop: 32, marginBottom: 32 }} textAlign="justify">
              MetaMask extension is not available on this device. Please install MetaMask and try again.
            </Typography>
            <Button color="primary" onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
              Install metamask
            </Button>
          </>
        ) : status === "initializing" || status === "connecting" ? (
          <>
            <Typography style={{ marginTop: 32 }} textAlign="justify">
              Loading...
            </Typography>
          </>
        ) : status === "notConnected" ? (
          <>
            <Button style={{ marginTop: 32 }} onClick={() => connect()} color="primary" variant="contained">
              Connect wallet with MetaMask
            </Button>
          </>
        ) : (
          <>
            <Table style={{ marginTop: 32, marginBottom: 32 }}>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <b>My address</b>
                  </TableCell>
                  <RightCell>
                    {shortAddress} ({chainId})
                  </RightCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Connected via</b>
                  </TableCell>
                  <RightCell>MetaMask</RightCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>ETH Ballance</b>
                  </TableCell>
                  <RightCell>{round(ethBalance, 6)} Ξ</RightCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>${"{LG}"} Ballance</b>
                  </TableCell>
                  <RightCell>0.0 {"{LG}"}</RightCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>My Reputation</b>
                  </TableCell>
                  <RightCell>0</RightCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button variant="contained" color="primary" fullWidth>
              GET ${"{LG}"}
            </Button>
            <br />
            {/* <div style={{ width: "100%", textAlign: "right" }}>
              <Button disabled={ethereum === undefined || ethereum === null} color="error" onClick={disconnectWallet}>
                Disconnect wallet
              </Button>
            </div> */}
          </>
        )}
      </LGPaper>
    </Container>
  );
}
