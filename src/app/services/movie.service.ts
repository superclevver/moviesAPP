import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Array<any> = [];

  constructor() { }

  //We get the popular movies from the API (themoviedb)
  async getMovies() {
    await axios.
    get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc',
    {
      params: {
        api_key: '375a372bc76606afdc04c12860eca7ce',
      }
    }).
    then(response => {
      this.movies = response.data.results;
    })

    return this.movies;
  }

  //We get a movie by ID
  getMovieByID(id) {
    let movie = this.movies.find(movie => movie.id === parseInt(id));
    
    return movie;
  }

  

}
