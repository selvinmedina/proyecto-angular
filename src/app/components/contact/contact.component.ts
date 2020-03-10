import { Component, OnInit, ViewChild } from '@angular/core';

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
  @ViewChild("textos", { read: false, static: true }) textos;

  constructor() {
    this.caption = false;
  }

  ngOnInit() {

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
