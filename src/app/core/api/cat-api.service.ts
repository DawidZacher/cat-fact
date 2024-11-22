import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactResponse } from '../../shared/models/cat-response.model';

@Injectable()
export class CatApiService {
  constructor(private httpClient: HttpClient) {}

  public getCatFacts(): Observable<CatFactResponse> {
    return this.httpClient.get<CatFactResponse>(
      'https://meowfacts.herokuapp.com/'
    );
  }
}
