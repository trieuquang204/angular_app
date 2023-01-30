import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/product-management/models/movie.class';
import { MovieService } from 'src/app/services/movie.service';



@Component({
  selector: 'app-movie-list',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  public movies : Movie[] = [];

  constructor(
    private _movieService : MovieService
  ) {}

  ngOnInit() {
    this.movies = this._movieService.getAllMovies();
  }

}
