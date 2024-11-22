import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-cat-facts',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.scss',
})
export class CatFactsComponent {}
