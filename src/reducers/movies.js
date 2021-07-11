 const movies = (movies = [], action) => {
     switch (action.type) {
         case 'FETCH_ALL':
             return action.payload;
         default:
             return movies;
     }
 }
 export default movies
