import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  //We catch the param sent from the previous page
  id = this.activatedRoute.snapshot.paramMap.get('id');
  //We get the movie by the id
  movie = this.movieService.getMovieByID(this.id);

  constructor(private activatedRoute: ActivatedRoute, 
              private movieService: MovieService) { }

  ngOnInit() {
  }

}
