import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import kurti from './../../Images/Kurti.jpg';
import { Link } from 'react-router-dom';
import './ContentCard.css'; // Import CSS file

export default function ContentCard(props) {
  return (
    <Card className="content-card">
      <CardMedia
        className="card-media"
        image={kurti}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom component="div" className="title">
          solid Kurti {props.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" className="price">
          Rs. {props.price}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Link to="/p1/description">
          <Button
            className="button"
            variant="contained"
          >
            VISIT
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
