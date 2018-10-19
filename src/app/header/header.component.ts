import { Component } from '@angular/core'
import {Router} from "@angular/router";

@Component({

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private router: Router) {} 

  goHome() {
    this.router.navigate(['home']); 
  }
  goAbout() {
    this.router.navigate(['about']); 
  }
  goServices() {
    this.router.navigate(['services']); 
  }
  goResearch() {
    this.router.navigate(['research']); 
  }
  goPressRelease() {
    this.router.navigate(['press']); 
  }
  goOurWork() {
    this.router.navigate(['work']); 
  }
  goContact() {
    this.router.navigate(['contact']); 
  }
}