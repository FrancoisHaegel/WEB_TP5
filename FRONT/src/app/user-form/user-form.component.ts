import { Component, OnInit } from '@angular/core';

import { User } from "../models/user/user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  id = 0;

  genders = ['Male', 'Female', 'Other'];

  countries = ['France', 'Germany', 'Spain', 'Russia', 'Italy', 'Sweden'];

  model = new User(1, "Francois", "Haegel", this.genders[0], "Fran67", "*Fran1111111", "Lingolsheim", 67380, "7, Rue des Tilleuls", "haegelfrancois@example.com", "06 77 77 77 77", this.countries[0]);

  submitted = false;

  onSubmit() {this.submitted = true; }

  newUser(){
    this.model = new User(this.id++, '', '', '', '', '', '', 0, '', '', '', '');
  }

  constructor() { }

  ngOnInit() {
  }

}