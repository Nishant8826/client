import { Component } from '@angular/core';
import { register } from './register.model';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userData:ServiceService){}

  registerUser(data:register){
    this.userData.saveUser(data).subscribe((result)=>{
      console.log(result)
    })
  }
}
