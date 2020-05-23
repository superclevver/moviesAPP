import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies: Array<any> = [];

  constructor(private movieService: MovieService) { }

  async ngOnInit() {
    //We get the movies from the service
    this.movies = await this.movieService.getMovies();
  }

}
