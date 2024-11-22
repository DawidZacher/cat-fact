import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CatFactResponse } from '../../shared/models/cat-response.model';

@Injectable()
export class CatApiService {
  constructor(private httpClient: HttpClient) {}

  public getCatFacts(): Observable<string[]> {
    return this.httpClient
      .get<CatFactResponse>('https://meowfacts.herokuapp.com/')
      .pipe(map((response) => response.data));
  }
}
