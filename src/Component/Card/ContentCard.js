import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import kurti from './../../Images/Kurti.jpg'
import { Link } from 'react-router-dom';


export default function ContentCard(props) {
  return (
    <Card sx={{  backgroundColor: "#f6f1eb", border: "1px solid #94722f", borderRadius: 5 }}>
      <CardMedia
        sx={{ height: 250, margin : 1, borderRadius : 2 }}
        image= {kurti}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom component="div" sx={{marginTop : -2}}>
          solid Kurti {props.name}
         </Typography>
        <Typography gutterBottom  variant="h5"  component="div" sx={{marginTop : 1,color:"#94722f"}}>
          Rs. {props.price}
        </Typography>
      </CardContent>
      <CardActions sx={{
        marginTop : -3
      }}>
        <Link to="/p1/description">
          <Button 
            sx={{
              backgroundColor: "#91966c",
              color: "white",
              fontWeight: "bold",
              marginTop: "20%",
              marginLeft: "10%",
              marginBottom : "5%"
            }}
            variant="contained"
            
          >
            VISIT
          </Button> </Link>
        
      </CardActions>
    </Card>
  );
}