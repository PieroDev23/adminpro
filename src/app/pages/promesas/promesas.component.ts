import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css'],
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers().then((users) => console.log(users));
  }

  getUsers() {
    return fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((users) => users.data);
  }
}
