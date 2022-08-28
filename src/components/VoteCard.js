import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
  CardHeader,
} from "@mui/material";
import { Link } from "react-router-dom";

const VoteCard = ({ title, description, proposalId, address }) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`/proposal/${proposalId}`}>
        <CardHeader
          title={`Algorand Finance by ${
            address && address?.slice(0, 6)
          }...${address?.slice(-4, address.length)}`}
        />
        <CardContent>
          <Box>
            <Typography variant="h5">{title}</Typography>
          </Box>
          <Box>{description}</Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VoteCard;
