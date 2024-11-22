import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CatFactsComponent } from './cat-facts.component';
import { CatApiService } from '../../core/api/cat-api.service';

describe('CatFactsComponent', () => {
  let component: CatFactsComponent;
  let fixture: ComponentFixture<CatFactsComponent>;
  let mockCatApiService: jasmine.SpyObj<CatApiService>;

  beforeEach(async () => {
    mockCatApiService = jasmine.createSpyObj('CatApiService', ['getCatFacts']);
    mockCatApiService.getCatFacts.and.returnValue(
      of({ data: ['Fact 1', 'Fact 2'] })
    );

    await TestBed.configureTestingModule({
      imports: [CatFactsComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: CatApiService, useValue: mockCatApiService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CatFactsComponent);
    component = fixture.componentInstance;
  });

  it('should check for duplicates in cat facts', () => {
    component.catFactList$.next(['Fact 1', 'Fact 2', 'Fact 3']);
    let result = component['checkDuplicateFacts']('Fact 1');
    expect(result).toBeTrue();

    result = component['checkDuplicateFacts']('Fact 4');
    expect(result).toBeFalse();
  });
});
