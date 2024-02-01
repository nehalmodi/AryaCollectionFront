import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Tab, Tabs } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Button } from "@mui/base";
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <React.Fragment >
      <div >
      <AppBar sx={{ backgroundColor: "#91966c", position: "fixed", height: 60 , border:"none", boxShadow: "none" }} >
        <Toolbar>
          <Tabs sx={{ padding: 0, margin: 0 }}>
            <Tab
              label="Arya Collection"
              sx={{
                borderRadius: "25px",
                border: "2px solid white",
                fontSize: "20px",
                padding: "0px 5px",
                margin: "-10 5px",
                fontWeight: "bold",
                color: "white",
              }}
            ></Tab>
          </Tabs>

          <ShoppingBagIcon
            sx={{
              color: "white",
              borderRadius: "25%",
              border: "1px solid white",
              fontSize: 40,
              marginLeft: "auto",
            }}
          ></ShoppingBagIcon>

          <ShoppingCartIcon
            sx={{
              borderRadius: "25%",
              border: "1px solid white",
              fontSize: 40,

              marginLeft: "20px",
              marginRight: "30px",
            }}
          ></ShoppingCartIcon>
          <NavLink to = "/auth">
          <Button 
            variant="contained"
            style={{
              fontSize: "22px",
              backgroundColor: "#91966c",
              borderRadius: "25px",
              cursor: "pointer", // Apply this style for other elements also 
              border: "1px solid white",
              color: "white",
            }}
          >
            SignIn
          </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      </div>
    </React.Fragment>
  );
}
