import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CatApiService } from './cat-api.service';
import { provideHttpClient } from '@angular/common/http';

describe('CatApiService', () => {
    let service: CatApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CatApiService,
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        });
        service = TestBed.inject(CatApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
