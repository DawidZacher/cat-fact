import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { LoaderComponent } from '../loader/loader.component'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [LoaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  public label = input()
  public loading = input(false)
  public disabled = input(false)
  public type = input<'submit' | 'button'>('submit')
}
