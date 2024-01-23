import React from "react";
import { Typography } from "@mui/material";

import "./Home.css";

const styles = {
  customFont: {
    fontFamily: "Tangerine-Regular, cursive",
  },
};

export default function Home() {
  return (
    <React.Fragment>
      <div className="catalogue">
        <Typography style={styles.customFont} className="customFont">
          Catalogue
        </Typography>
      </div>
      <div className="perfect">
        <Typography className="customFont2">
          Perfect for everyday & Partywear
        </Typography>
      </div>
    </React.Fragment>
  );
}
