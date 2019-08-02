import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.scss']
})
export class HomeNavigationComponent implements OnInit {

  private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(
      // public location: Location,
      private element : ElementRef
      ) {
      this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
        //var titlee = this.location.prepareExternalUrl(this.location.path());
      let titlee;
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        //var titlee = this.location.prepareExternalUrl(this.location.path());
        let titlee;
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

}