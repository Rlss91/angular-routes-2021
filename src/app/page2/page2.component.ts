import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((ob) => {
      console.log('params ob', ob);
    });
  }

  navigateToPage3(): void {
    this.router.navigate(['/page2', '12', '34'], {
      queryParamsHandling: 'preserve',
    });
  }
}
