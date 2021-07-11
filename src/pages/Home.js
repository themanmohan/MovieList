import React from 'react'
import Movies from './Movies'
import { Grid,CircularProgress } from '@material-ui/core';
import useStyles from './HomeStyle';
const Home=()=>{
  const classes = useStyles();
    return(
          !Movies?<CircularProgress/>:(
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              
                <Grid  item xs={12} sm={4}>
                   <Movies />
                </Grid>
              
          </Grid>
        )
    )
}

export default Home