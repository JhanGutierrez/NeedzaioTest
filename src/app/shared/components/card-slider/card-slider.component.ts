import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component( {
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: [ './card-slider.component.scss' ]
} )
export class CardSliderComponent implements OnInit, AfterViewInit {

  @ViewChild( 'cardsContainer' ) cardsContainer!: ElementRef;

  cardList: HTMLElement[] = new Array();

  constructor () { }

  ngOnInit(): void {
  }

  /**
   * Move to the right
   */
  nextCard() {
    this.changeDirection( true );
  }

  /**
   * Move to the left
   */
  previousCard() {
    this.changeDirection();
  }

  /**
   * Allows you to set the direction of the slider.
   * @param changeDirection 
   */
  changeDirection( changeDirection: boolean = false ) {

    this.cardList.forEach( ( card: HTMLElement ) => {
      const removeOrangeLeft = [ 'card--orange-l', 'z-1' ];
      const addOrangeRight = [ 'card--orange-r', 'z-2' ];
      const removeBlue = [ 'card--blue', 'z-3' ];

      if ( changeDirection ) {
        if ( Number( card.getAttribute( 'index' ) ) === 0 ) {

          card.classList.remove( ...removeOrangeLeft );
          card.classList.add( ...addOrangeRight );
          card.setAttribute( 'index', '2' );

        } else if ( Number( card.getAttribute( 'index' ) ) === 1 ) {

          card.classList.remove( ...removeBlue );
          card.classList.add( ...removeOrangeLeft );
          card.setAttribute( 'index', '0' );

        } else if ( Number( card.getAttribute( 'index' ) ) === 2 ) {

          card.classList.remove( ...addOrangeRight );
          card.classList.add( ...removeBlue );
          card.setAttribute( 'index', '1' );

        }
      } else {
        if ( Number( card.getAttribute( 'index' ) ) === 0 ) {

          card.classList.remove( ...removeOrangeLeft );
          card.classList.add( ...removeBlue );
          card.setAttribute( 'index', '1' );

        } else if ( Number( card.getAttribute( 'index' ) ) === 1 ) {

          card.classList.remove( ...removeBlue );
          card.classList.add( ...addOrangeRight );
          card.setAttribute( 'index', '2' );

        } else if ( Number( card.getAttribute( 'index' ) ) === 2 ) {

          card.classList.remove( ...addOrangeRight );
          card.classList.add( ...removeOrangeLeft );
          card.setAttribute( 'index', '0' );
        }
      }

    } );
  }

  ngAfterViewInit(): void {
    this.cardList = this.cardsContainer.nativeElement.querySelectorAll( '.card' );
  }

}
