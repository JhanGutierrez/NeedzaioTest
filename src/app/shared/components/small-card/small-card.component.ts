import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [ './small-card.component.scss' ]
} )
export class SmallCardComponent implements OnInit {

  @Input( 'imageUrl' ) imageUrl: string = ''
  @Input( 'title' ) title: string = ''

  constructor () { }

  ngOnInit(): void {
  }

}
