import { Component, EventEmitter, Output } from '@angular/core';
import { register } from 'src/app/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  firstname: string='';
  lastname: string='';
  phone: string='';
  email: string='';
  password: string='';
  confirmPassword: string='';

  @Output() userData:EventEmitter<register>=new EventEmitter()

  onSubmit() {
    const data = {
      firstname: this.firstname,
      lastname: this.lastname,
      phone: this.phone,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };
    this.userData.emit(data)
  }
}
