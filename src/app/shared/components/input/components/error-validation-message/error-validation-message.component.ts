import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-error-validation-message',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './error-validation-message.component.html',
    styleUrl: './error-validation-message.component.scss',
})
export class ErrorValidationMessageComponent {
    public errorMessage: string | null;

    @Input() set errors(errors: ValidationErrors | null) {
        this.errorMessage = errors ? this.getErrorMessage(errors) : null;
    }

    private getErrorMessage(errors: ValidationErrors): string {
        const errorMessages: Record<string, string> = {
            required: 'Field is required',
            email: 'Provide a valid email address',
            password: 'Enter the secure password',
        };

        return errorMessages[Object.keys(errors)[0]];
    }
}
