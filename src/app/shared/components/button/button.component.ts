import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [LoaderComponent, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  public label = input.required();
  public loading = input(false);
  public disabled = input(false);
  public type = input<'submit' | 'button'>('submit');
  public variant = input<'default' | 'text'>('default');

  public onPress = output<void>();
}
