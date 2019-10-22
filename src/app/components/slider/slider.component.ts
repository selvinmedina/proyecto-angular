import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura:number;
  @Input('captions') etiquetas:boolean;
  @Output() getAutor = new EventEmitter();
  public autor:any;

  constructor() {
    this.autor = {
      nombre: 'Selvin Medina',
      correo: 'selvinmedina0016@gmail.com'
    }
   }

  ngOnInit() {
    $('#logo').click(function (e) {
      $('header').css('background', 'green')
        .css('height', '50px');
    });


    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.etiquetas,
      slideWidth: this.anchura
    });
  }

  lanzar(event){
    this.getAutor.emit(this.autor);
  }

}
