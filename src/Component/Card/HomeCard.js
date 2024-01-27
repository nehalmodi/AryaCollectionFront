import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import kurti from "../../Images/Kurti.jpg";
import Button from "@mui/material/Button";

export default function HomeCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        marginLeft: "0px",
        marginTop: "3%",
        backgroundColor: "#f6f1eb",
        borderRadius: "20px",
        width: 300,
        height: 230,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: 300,
          height: 230,
          backgroundColor: "#f6f1eb",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography component="div" variant="h5">
            Kurti
          </Typography>
          <Button
            sx={{
              backgroundColor: "#91966c",
              color: "white",
              fontWeight: "bold",
              marginTop: "20%",
            }}
            variant="contained"
            href="#contained-buttons"
          >
            Link
          </Button>
        </CardContent>
        <CardMedia
          component="img"
          sx={{
            marginLeft: "20%",
            width: "35%",
            height: "50%",
            borderRadius: "50%",
          }}
          image={kurti}
          alt="Live from space album cover"
        />
      </Card>
    </Box>
  );
}
