import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { autocompleteClasses } from "@mui/material";
import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
  } from '@mui/material/styles';

import { FormControl, FormLabel } from "@mui/material";

export default function BasicCard() {
    const violetBase = '#91966c';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText:  '#fff' 
      
    },
  },
});

  return (
    <Card
      sx={{
        width: "90%",
        maxWidth: "25rem",
        margin: "7rem auto",
        borderRadius : "25px",

        backgroundColor: "#f6f1eb",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: "#94722f",
            fontWeight: 550,
            fontSize: 30,
            textAlign: "center",
          }}
        >
          LOGIN
        </Typography>

        <FormControl>
          <FormLabel sx={{
            marginTop : 5
          }}>USERNAME</FormLabel>
          <TextField size="small" borderRadius = "0" sx={{
            marginTop : 1,
            backgroundColor:"#cbbaa6",
            border : "1px solid black",
            borderRadius : 0,
            width : "150%"
          }}></TextField>

<FormLabel sx={{
            marginTop : 5
          }}>PASSWORD</FormLabel>
          <TextField size="small" borderRadius = "0" sx={{
            marginTop : 1,
            backgroundColor:"#cbbaa6",
            border : "1px solid black",
            borderRadius : 0,
            width : "150%"
          }}></TextField>
          <ThemeProvider theme={theme}>
          <Button variant="contained" color="violet" sx={{
            marginTop : "10%",
            marginLeft :"60%",
            borderRadius : 25,
            
          }}>LOGIN</Button>
          <Button variant="contained" color="violet" sx={{
            marginTop : "10%",
            marginLeft :"60%",
            borderRadius : 25,
            
          }}>SIGNUP</Button>
          </ThemeProvider>
        </FormControl>
      </CardContent>
    </Card>
  );
}
