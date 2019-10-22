import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: number;
  public caption: boolean;
  public autor: any;

  constructor() { }

  ngOnInit() {
    this.caption = false;
  }

  cargarSlider() {
    this.anchuraToSlider = null;
    setTimeout(() => {
      this.anchuraToSlider = this.widthSlider;
    }, 1);
  }

  conseguirAutor(event) {
    this.autor = event;
  }
}
