import { NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  width = input(50)
  height = input(50)
}
