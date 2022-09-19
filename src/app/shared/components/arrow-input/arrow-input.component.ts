import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-arrow-input',
  templateUrl: './arrow-input.component.html',
  styleUrls: [ './arrow-input.component.scss' ]
} )
export class ArrowInputComponent implements OnInit {

  @Input( 'placeholder' ) placeholder: string = '';

  constructor () { }

  ngOnInit(): void {
  }

  test() {
    alert( "ss" );
  }
}
