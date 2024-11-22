import { ChangeDetectionStrategy, Component } from '@angular/core'
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms'
import { finalize } from 'rxjs'
import { InputComponent } from '../../shared/components/input/input.component'
import { ButtonComponent } from '../../shared/components/button/button.component'
import { LoginUser } from '../../shared/models/auth.model'
import { AuthService } from '../../core/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  providers: [AuthService],
})
export class LoginComponent {
  public isLoading = false

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private authService: AuthService) {}

  public onLogin(): void {
    if (this.loginForm.invalid) {
      return
    }
    this.isLoading = true

    this.authService
      .loginUser(this.loginForm.value as LoginUser)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe()
  }
}
