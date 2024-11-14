import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  submitForm(name: string, email: string, message: string) {
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Your message has been sent!');
  }
}
