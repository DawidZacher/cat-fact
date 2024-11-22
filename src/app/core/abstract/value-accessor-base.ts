import { ControlValueAccessor, NgControl } from '@angular/forms';

export abstract class ValueAccessorBase<T> implements ControlValueAccessor {
  private innerValue: T | null = null;

  protected constructor(protected ngControl: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  emitValueChangeEvent: (value: T | null) => void = () => {};
  emitTouchEvent: () => void = () => {};

  writeValue(value: T | null): void {
    this.innerValue = value;
  }

  registerOnChange(onChangeFn: (_: T | null) => void): void {
    this.emitValueChangeEvent = onChangeFn;
  }

  registerOnTouched(onTouch: () => void): void {
    this.emitTouchEvent = onTouch;
  }

  get value(): T | null {
    return this.innerValue;
  }

  set value(value: T | null) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.emitValueChangeEvent(value);
    }
  }

  get isInvalid(): boolean {
    return !!this.ngControl.touched && !!this.ngControl.invalid;
  }

  get isValid(): boolean {
    return !!this.ngControl.dirty && !!this.ngControl.valid;
  }
}
