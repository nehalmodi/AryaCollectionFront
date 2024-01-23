import React from "react";
import { Typography } from "@mui/material";

import "./Home.css";

const styles = {
  catalogue: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "-20",
    padding: 0,
  },
  perfect: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-30",
    padding: 0,
  },
  customFont: {
    fontFamily: "Tangerine-Regular, cursive",
    color: "white",
    fontWeight: "-30",
    fontSize: "100px",

    // Adjust the font size as needed
  },
  "@media (maxWidth: 600px)": {
    container: {
      marginTop: "60px",
    },
  },
  customFont2: {
    color: "white",
    marginTop: -15,
    marginLeft: "2%",
    padding: 0,
    // Adjust the font size as needed
  },
};

export default function Home() {
  return (
    <React.Fragment>
      <div style={styles.catalogue}>
        <Typography style={styles.customFont}>Catalogue</Typography>
      </div>
      <div style={styles.perfect}>
        <Typography style={styles.customFont2}>
          Perfect for everyday & Partywear
        </Typography>
      </div>
    </React.Fragment>
  );
}
