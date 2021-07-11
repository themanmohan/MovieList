import React from 'react'
import {
   
    Link
} from "react-router-dom";
import useStyles from './MoviesStyle';
import { Card, CardActions, CardMedia, Button, Typography } from '@material-ui/core/';
import {useSelector} from 'react-redux'
const Movies=()=>{
      const classes = useStyles();
    const movies = useSelector((state => state.movies))
    console.log(movies.poster_path)
    return(
        <Card className={classes.card}>
        
        
      <CardMedia   className = {
        classes.media
      }
      image = {
        `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
      }
      title = {
        movies.original_title
      } >
         
      </CardMedia>
      <div className={classes.overlay}>
        <Typography variant="h6">{movies.original_title}</Typography>
        
      </div>
      

       <Typography className={classes.title} gutterBottom variant="h5" component="h2">Title:-{movies.original_title}</Typography>
            
      <div className={classes.details}>
      
     
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary"><Link to={`/moviesdetail/${movies.id}`}>view detail</Link> </Button>
       
      </CardActions>
     
      </div>
      
      
    </Card>
    )
}



export default Movies