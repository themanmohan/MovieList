import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {getMovies} from './actions/Movies'
import MovieDetail from "./pages/MovieDetail"
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

import Home from './pages/Home';
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  
  return (
    <Router>
    <Switch>
      <Route path="/" exact>
       <Home/>
      </Route>
      <Route path="/moviesdetail/:id" >
       <MovieDetail/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
