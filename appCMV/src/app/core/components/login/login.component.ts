import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* Variable para manipular */
  hidePassword = true;
  constructor() { }

  ngOnInit(): void {
  }

}
