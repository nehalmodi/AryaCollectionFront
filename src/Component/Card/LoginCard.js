import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { autocompleteClasses } from "@mui/material";
import { useState, useEffect } from "react";
import {
  createTheme,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from "@mui/material/styles";

import { FormControl, FormLabel } from "@mui/material";

export default function BasicCard() {
  const violetBase = "#91966c";
  const violetMain = alpha(violetBase, 0.7);

  const theme = createTheme({
    palette: {
      violet: {
        main: violetMain,
        light: alpha(violetBase, 0.5),
        dark: alpha(violetBase, 0.9),
        contrastText: "#fff",
      },
    },
  });

  const [marginTop, setMarginTop] = useState("");
  const [isLogin , setIsLogin ] = useState(true)
 
  const loginButtonDisabled = false;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth);

      if (screenWidth <= 1271) {
        setMarginTop("30%");
      } else {
        setMarginTop("");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const switchModeHandler = () => {
    setIsLogin(!isLogin)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
  }

  return (
    <Card
      sx={{
        width: "90%",
        maxWidth: "25rem",
        margin: "7rem auto",
        marginTop: marginTop,
        borderRadius: "25px",
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
            marginBottom : 6
          }}
        >
          {isLogin ? "LOGIN" : "Signup"}
        </Typography>

        <form onSubmit={handleSubmit}>

        {!isLogin && (<><FormLabel
            sx={{
              marginTop: 5,
            }}
          >
            NAME
          </FormLabel>
          <TextField
            size="small"
            borderRadius="0"
            sx={{
              marginTop: 1,
              marginBottom: 2,
              backgroundColor: "#cbbaa6",
              border: "1px solid black",
              borderRadius: 0,
              width: "100%",
            }}
          ></TextField></>)}

          <FormLabel
            sx={{
              marginTop: 5,
            }}
          >
           {isLogin ? "USERNAME" : "EMAIL"}
          </FormLabel>
          <TextField
            size="small"
            borderRadius="0"
            sx={{
              marginTop: 1,
              marginBottom: 2,
              backgroundColor: "#cbbaa6",
              border: "1px solid black",
              borderRadius: 0,
              width: "100%",
            }}
          ></TextField>

          {!isLogin && (<><FormLabel
            sx={{
              marginTop: 5,
            }}
          >
            MOBILE NUMBER
          </FormLabel>
          <TextField
            size="small"
            borderRadius="0"
            sx={{
              marginTop: 1,
              marginBottom: 2,
              backgroundColor: "#cbbaa6",
              border: "1px solid black",
              borderRadius: 0,
              width: "100%",
            }}
          ></TextField></>)}

          <FormLabel
            sx={{
              marginTop: 5,
            }}
          >
            PASSWORD
          </FormLabel>
          <TextField
            size="small"
            borderRadius="0"
            sx={{
              marginTop: 1,
              marginBottom: 2,
              backgroundColor: "#cbbaa6",
              border: "1px solid black",
              borderRadius: 0,
              width: "100%",
            }}
          ></TextField>
          <ThemeProvider theme={theme}>
            <Button type = "submit"
              variant="contained"
              color="violet"
              disabled={loginButtonDisabled}
              sx={{
                marginTop: "10%",
                marginLeft: "40%",
                borderRadius: 25,
              }}
            >
              {isLogin? "LOGIN" : "SIGNUP"}
            </Button>
            <Button onClick={switchModeHandler}
              variant="contained"
              color="violet"
              sx={{
                marginTop: "5%",
                marginLeft: "40%",
                borderRadius: 25,
              }}
            >
              {isLogin? "SIGNUP" : "LOGIN"}
            </Button>
          </ThemeProvider>
        </form>
      </CardContent>
    </Card>
  );
}
