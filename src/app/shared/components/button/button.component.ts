import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
} )
export class ButtonComponent implements OnInit {

  @Input( 'buttonType' ) buttonType: string = 'button';
  @Input( 'buttonValue' ) buttonValue: string = '';
  @Input( 'buttonColor' ) buttonColor: string = 'blue';
  @Input( 'disabled' ) disabled: boolean = false;

  constructor () { }

  ngOnInit(): void {
  }

}
