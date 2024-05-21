import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authenticateUser(form: NgForm){
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if((form.value.Username === username) && (form.value.password === password)){
      sessionStorage.setItem("IsLoggedIn", "true");
    } else {
      sessionStorage.setItem("IsLoggedIn", "false")
    }
  }
}
