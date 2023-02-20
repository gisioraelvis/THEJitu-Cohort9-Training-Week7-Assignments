import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-signup-template-driven-form',
  templateUrl: './signup-template-driven-form.component.html',
  styleUrls: ['./signup-template-driven-form.component.css'],
})
export class SignupTemplateDrivenFormComponent {
  submitted = false;
  user = new User('', '', '', '');

  onSubmit() {
    console.log(this.user);
    this.submitted = true;
  }
}
