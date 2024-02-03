import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import "./Home.css";
import HomeCard from "../Component/Card/HomeCard";

const styles = {
  customFont: {
    fontFamily: "Tangerine-Regular, cursive",
    fontSize: 100,
  },
};

export default function Home() {
  //*************************************************Responsiveness
  const [marginTop, setMarginTop] = useState("5%");
  const [marginBottom, setMarginBottom] = useState("0");
  const [flexDirection, setAlignment] = useState("row");
  const [gap, setGap] = useState("20px");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth)

      if (screenWidth <= 1271) {
        setMarginTop("20%");
        setMarginBottom("13%");
        setAlignment("column")
        setGap("100px")
      } else {
        setMarginTop("5%");
        setMarginBottom("0");
        setAlignment("row")
        setGap("20px")
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
      <div className="catalogue" style={{ marginTop  }}>
        <Typography style={styles.customFont} className="customFont">
          Catalogue
        </Typography>
      </div>
      <div className="perfect"  style={{marginBottom}}>
        <Typography className="customFont2">
          Perfect for everyday & Partywear
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection, gap: gap, marginLeft:"10px",alignItems: 'center'}}>
        <HomeCard marginTop={marginTop} name={"Kurti"} />
        <HomeCard marginTop={marginTop}  name={"Plazo"}/>
        <HomeCard marginTop={marginTop}  name={"Dupatta"}/>
        <HomeCard marginTop={marginTop}  name={"Set"}/>
      </div>
    </React.Fragment>
  );
}
