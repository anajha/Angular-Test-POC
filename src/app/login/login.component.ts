import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginUser(event)
  {
    event.preventDefault();
    const target=event.target;
    const username=target.querySelector('#inputEmail');
    const password=target.querySelector('#inputPassword');
    this.router.navigate(['/home']);  
  }
}
