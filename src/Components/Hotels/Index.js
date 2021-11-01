import React from 'react';
import { map } from 'lodash';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import dataHotels from '../../_helpers/Data/hotels.json'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  list:{
    listStyleType:"none",
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  playIcon: {
    height: 38,
    width: 38,
  },

}))


export default function Hotels(props) {
  const classes=useStyles();
  const {res}=props;
  const filteredItem=map(dataHotels.items,(item)=>{
    console.log(item.city,res.dist.name)
    if (item.city===res.dist.name) {
      return item
    }
  })
  const normalizeHotelList= filteredItem.filter((item)=> item!== undefined);
 return(
   <ul className={classes.list}>
     {normalizeHotelList.length === 0 ? "We cannot found a hotel you want" : 
     normalizeHotelList.map((item)=>{
      
        const{id,name,city,hotel_rating,phone_number,pic}=item;
          return(
            <li key={id}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image="https://via.placeholder.com/150"
                  title="Hotel"
                />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              <img src={pic} alt="" />
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {city}<br/>
              {phone_number}<br/>
            <Rating name="read-only" value={hotel_rating} readOnly />
            </Typography>
          </CardContent>
        </div>
      </Card>
      <br/>
         </li> 
 
 
        )

       
     
     })}
     
     
          
   </ul>
 );
}