import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  qdata: any;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.qdata = {
      data: this.route.snapshot.queryParams.data,
    };
    console.log('queryParams', this.route.snapshot.queryParams);
    this.route.queryParams.subscribe((ob) => {
      console.log('ob', ob);
    });
  }

  navigateTo(): void {
    // this.router.navigate(['home'], { relativeTo: this.route });
    this.router.navigate(['home']);
  }
}
