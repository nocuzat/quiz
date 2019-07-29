import { Component } from '@angular/core';
import { Page1Page } from '../page/page1/page1.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  onStart() {
    this.router.navigateByUrl("page1")
  }




}
