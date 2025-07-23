export class Movie {
  id: number;
  title: string;
  director: string;
  actors: string[];
  posterPath: string;

  constructor(id: number, title: string, director: string, actors: string[], posterPath: string) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.actors = actors;
    this.posterPath = posterPath;
  }

  getShortCast(): string {
    return this.actors.slice(0, 2).join(", ");
  }
}
