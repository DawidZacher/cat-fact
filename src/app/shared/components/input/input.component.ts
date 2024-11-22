import { ChangeDetectionStrategy, Component, input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ErrorValidationMessageComponent } from './components/error-validation-message/error-validation-message.component';
import { ValueAccessorBase } from '../../../core/abstract/value-accessor-base';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  imports: [ErrorValidationMessageComponent, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styleUrls: ['./input.component.scss'],
})
export class InputComponent
  extends ValueAccessorBase<string>
  implements ControlValueAccessor
{
  public type = input<'email' | 'password'>('email');
  public id = input.required<string>();
  public label = input.required<string>();
  public placeholder = input<string>();

  constructor(@Self() control: NgControl) {
    super(control);
  }

  onValueChange(value: string): void {
    this.value = value;
  }
}
