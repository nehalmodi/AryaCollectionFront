import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import kurti from "../../Images/Kurti.jpg";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HomeCard( props) {

  const handleClick = () =>  {
    return(
      <NavLink to="/content"></NavLink>)
  }

  const [boxWidth, setBoxWidth] = useState(300);
  const [boxheight, setBoxHeight] = useState(230);
  const [imageWidth, setImageWidth] = useState("35%");
  const [imageHeight, setImageheight] = useState("50%");
  const [marginLeft, setMarginLeft] = useState("20%");
  
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth)

      if (screenWidth <= 1271) {
        setBoxWidth(500)
        setImageWidth("25%")
        setImageheight("60%")
        setBoxHeight(260)
        setMarginLeft("45%")
      } else {
        setBoxWidth(300)
        setImageWidth("35%")
        setImageheight("50%")
        setBoxHeight(230)
        setMarginLeft("20%")
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


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
        width: boxWidth,
        height: boxheight,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: boxWidth,
          height:boxheight,
          backgroundColor: "#f6f1eb",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography component="div" variant="h5" sx={{color:"#94722f"}}>
            {props.name}
          </Typography>
          <Link to={`/${props.name}/content`}>
          <Button onClick={handleClick}
            sx={{
              backgroundColor: "#91966c",
              color: "white",
              fontWeight: "bold",
              marginTop: "20%",
            }}
            variant="contained"
            
          >
            Link
          </Button> </Link>
        </CardContent>
        <CardMedia
          component="img"
          sx={{
            marginLeft: marginLeft,
            width: imageWidth,
            height: imageHeight,
            borderRadius: "50%",
          }}
          image={kurti}
          alt="Live from space album cover"
        />
      </Card>
    </Box>
  );
}
