import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/models/movie.class';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-add-edit',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(
    private _moviesService: MovieService
  ) {
  }

  ngOnInit(): void {

  }

  addVideo(name: string, link: string, author: string) {
    let movie = new Movie(12, name, link, author);
    this._moviesService.addMovie(movie)
  }
}
