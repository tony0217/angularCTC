import { Component, OnInit } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})
export class RegisterDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
