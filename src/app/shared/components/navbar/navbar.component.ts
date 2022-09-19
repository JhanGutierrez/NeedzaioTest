import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
} )
export class NavbarComponent implements OnInit {

  constructor ( private router: Router ) { }

  @ViewChild( 'navbar' ) navbar!: ElementRef;
  @HostListener( 'window:scroll', [ '$event' ] )

  /**
  * Changes the color of the navigation bar when scrolling
  */
  onScroll() {
    if ( window.scrollY > 150 ) {
      this.navbar.nativeElement.classList.add( 'navbar--orange' )
    } else {
      this.navbar.nativeElement.classList.remove( 'navbar--orange' )
    }
  }

  /**
   * Scrolls to the specified session
   * @param target 
   * @param offset 
   */
  scrollTo( target: string, offset: number = 0 ) {
    let element = document.getElementById( target );
    let verticalRect = element!.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo( { top: verticalRect, behavior: 'smooth' } );
  }

  /**
   * Session ends
   */
  logout() {
    if ( sessionStorage.getItem( '_token' ) ) {
      sessionStorage.removeItem( '_token' );
      this.router.navigate( [ '/login' ] );
    }
  }

  ngOnInit(): void {
  }

}
