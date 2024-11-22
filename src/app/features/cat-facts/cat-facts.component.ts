import { Component, ElementRef, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, finalize, tap } from 'rxjs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CatApiService } from '../../core/api/cat-api.service';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { CatFactCardComponent } from './components/cat-fact-card/cat-fact-card.component';
import { CAT_CARD_HEIGHT } from '../../utils/const';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-cat-facts',
  imports: [
    AsyncPipe,
    InfiniteScrollModule,
    LoaderComponent,
    CatFactCardComponent,
    ButtonComponent,
  ],
  standalone: true,
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.scss',
  providers: [CatApiService],
})
export class CatFactsComponent implements OnInit {
  public loading = false;
  public catFactList$ = new BehaviorSubject<string[]>([] as string[]);

  private isFactsFilledContainer = false;

  constructor(
    private authService: AuthService,
    private catApiService: CatApiService,
    private elementRef: ElementRef
  ) {}

  public ngOnInit(): void {
    this.fetchCatFact();
    this.checkContainerHeight();
  }

  public onScroll(): void {
    this.fetchCatFact();
  }

  public logout(): void {
    this.authService.logout();
  }

  private fetchCatFact(): void {
    this.loading = true;
    this.catApiService
      .getCatFacts()
      .pipe(
        tap((response: string[]) => {
          if (!this.checkDuplicateFacts(response[0])) {
            this.loading = false;
            this.catFactList$.next([...this.catFactList$.value, ...response]);
            return this.checkContainerHeight();
          }
          this.fetchCatFact();
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe();
  }

  private checkDuplicateFacts(catFact: string): boolean {
    return this.catFactList$.value.includes(catFact);
  }

  private checkContainerHeight(): void {
    if (this.isFactsFilledContainer) return;

    const container =
      this.elementRef.nativeElement.querySelector('.search-results');
    const items = this.catFactList$.value.length * CAT_CARD_HEIGHT;

    if (items < container.offsetHeight) {
      return this.fetchCatFact();
    }
    this.isFactsFilledContainer = true;
  }
}
