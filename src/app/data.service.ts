import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly RANDOM_JOKES_URI: string = 'https://api.chucknorris.io/jokes/random';

  constructor(private httpClient: HttpClient) { }

  public getRandomJoke(): Observable<any> {
    return this.httpClient.get(this.RANDOM_JOKES_URI);
  }
}
