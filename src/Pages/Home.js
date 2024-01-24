import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import "./Home.css";

const styles = {
  customFont: {
    fontFamily: "Tangerine-Regular, cursive",
    fontSize: 100,
  },
};

export default function Home() {
  //*************************************************Responsiveness
  const [marginTop, setMarginTop] = useState("5%");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 981) {
        setMarginTop("13%");
      } else {
        setMarginTop("5%");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //*************************************************Responsiveness

  return (
    <React.Fragment>
      <div className="catalogue" style={{ marginTop }}>
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
