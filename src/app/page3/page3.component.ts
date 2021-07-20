import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
})
export class Page3Component implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((ob) => {
      console.log('params ob', ob);
    });
  }

  backToPage2(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
