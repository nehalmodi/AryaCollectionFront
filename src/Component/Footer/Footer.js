import { Button } from "@mui/base";
import React from "react";
import { useState, useEffect } from "react";


export default function Footer() {

  const [fontSize, setFontSize] = useState("15px");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth)

      if (screenWidth <= 1271) {
        setFontSize("35px")
      } else {
        setFontSize("15px")
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <React.Fragment>
      <footer className="footer">
        <Button
          variant="contained"
          style={{
            fontSize: fontSize,
            backgroundColor: "#91966c",
            borderRadius: "25px",
            cursor: "pointer", // Apply this style for other elements also
            border: "1px solid #91966c",
            color: "white",
          }}
        >
         Contact Us 
        </Button>
      </footer>
    </React.Fragment>
  );
}
