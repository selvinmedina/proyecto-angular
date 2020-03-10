import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
    this.title = 'Selvin Medina';
    this.subtitle = 'Especialista en Software';
    this.email = 'selvinmedina0016@gmail.com';
  }

  ngOnInit() {
  }

}
