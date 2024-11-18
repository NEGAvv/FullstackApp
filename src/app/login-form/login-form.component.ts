import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { usernameValidator } from '../../validators/usernameValidator';
import { ageValidator } from '../../validators/ageValidator';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl<string>('', [usernameValidator(), Validators.required]),
    bio: new FormGroup({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      age: new FormControl<number|null>(null, [Validators.required, Validators.min(1), ageValidator(12,100)]),
    }),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.minLength(5), Validators.required]),
  });

  updateLogin() {
    this.loginForm.patchValue({
      username: "NEGAv",
      bio: {
        firstName: "Alina",
        lastName: "Khudolii",
        age: 20
      },
      email: "alina@mail.com",
      password: "123654"
    })
  }
  login() {
    if (this.loginForm.invalid) {
      alert('Form is invalid. Please fix the errors and try again.');
      return;
    }

    alert(JSON.stringify(this.loginForm.value, null, 2));
  }
}
