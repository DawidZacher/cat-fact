import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactCardComponent } from './cat-fact-card.component';
import { By } from '@angular/platform-browser';
import { ComponentRef } from '@angular/core';

describe('CatFactCardComponent', () => {
  let component: CatFactCardComponent;
  let fixture: ComponentFixture<CatFactCardComponent>;
  let componentRef: ComponentRef<CatFactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatFactCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatFactCardComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct fact and count', () => {
    const exampleFact = 'Example fact about cat.';
    componentRef.setInput('fact', exampleFact);
    componentRef.setInput('count', 5);

    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(titleElement.textContent).toBe('Cat-fact #6');

    const factElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(factElement.textContent).toBe(exampleFact);
  });
});
