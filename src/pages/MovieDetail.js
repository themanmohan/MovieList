import React,{useState} from 'react'
import {useSelector} from 'react-redux'

import useStyles from './MoviesStyle';
import { Card, CardActions,Grid, CardMedia, Button, Typography } from '@material-ui/core/';
import {
    useParams
} from "react-router-dom";
const MovieDetail=()=>{
    const classes = useStyles();
      let { id } = useParams();
    const movies = useSelector((state => state.movies))
    const movie=[movies]
    const uniquemovie = movie.find((data) => data.id == id)


const [favourite, setFavourite] = useState([])
  console.log(favourite)

const  AddToFavourite=(fmid)=>{
       setFavourite([...favourite,{fmid}])
  }

  
    return(
       <div>
       {
           uniquemovie ? (
             <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              
                <Grid  item xs={12} sm={6}>
                 
        <Card className={classes.card}>
        
        
      <CardMedia   className = {
        classes.media
      }
      image = {
        `https://image.tmdb.org/t/p/w500/${uniquemovie.poster_path}`
      }
      title = {
        movies.original_title
      } >
         
      </CardMedia>
      <div className={classes.overlay}>
        <Typography variant="h6">{uniquemovie.original_title}</Typography>
        
      </div>
      

      <div className={classes.details}>
      
     
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={()=>AddToFavourite(uniquemovie.id)}>Add To favourite 	&nbsp;	&nbsp;{favourite.length}</Button>
        
      </CardActions>

<CardActions className={classes.cardActions}>

         <Button  size="small" color="primary"><a href={"https://content.jwplatform.com/manifests/yp34SRmf.m3u8"}>Preview</a></Button>
      </CardActions>
      
      </div>
      
      
    </Card>
                </Grid>
                <Grid  item xs={12} sm={6}>
                         
        <Card className={classes.card} style={{padding:'30px'}}>
        
        
     

        <Typography variant="h5">Title:-{uniquemovie.original_title}</Typography>
        <Typography variant="h6">Overview:-{uniquemovie.overview}</Typography>
          <Typography variant="h6">Budget:-{uniquemovie.budget}$</Typography>
          <Typography variant="h6">Status:-{uniquemovie.status}</Typography>
        <Typography variant="h6">release_date:-{uniquemovie.release_date}</Typography>
        <Typography variant="h6">Revenue:-{uniquemovie.revenue}$</Typography>
        <Typography variant="h6">Rating:-{uniquemovie.vote_average}</Typography>
        <Typography variant="h6">Original_language:-{uniquemovie.original_language}</Typography>
 
      

      
      
    </Card>
                </Grid>
              
          </Grid>
           ):''
       }
       </div>
        
    )
}

export default MovieDetail