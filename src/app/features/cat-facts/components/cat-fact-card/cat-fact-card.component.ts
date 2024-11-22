import { NgOptimizedImage, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CAT_CARD_HEIGHT } from '../../../../utils/const';

@Component({
  selector: 'app-cat-fact-card',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cat-fact-card.component.html',
  styleUrl: './cat-fact-card.component.scss',
})
export class CatFactCardComponent {
  public fact = input<string>();
  public count = input<number>(0);

  public cardHeight = CAT_CARD_HEIGHT;
}
