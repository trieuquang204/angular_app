import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.class'


@Injectable()
export class MovieService {

  public movies : Movie[] = [
    new Movie(1, 'Lac troi', 'test.com', 'Son tung'),
    new Movie(2, 'Bai hat hay', 'test.net', 'Khac viet'),
  ];

  constructor() { }

  getAllMovies() {
    return this.movies;
  }

  addMovie(movie: Movie) {
    movie.id = this.getLastID(this.movies)
    this.movies.push(movie);
  }

  getLastID(movies : any) {
    let id = movies.length > 0 ? movies.sort((a : any, b : any) => {
      if(a.id > b.id ) return -1;
      else if (a.id < b.id ) return 1;
      else return 0
    })[0].id + 1 : 1;
    return id;
  }
}
